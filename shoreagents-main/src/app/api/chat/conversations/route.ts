import { NextRequest, NextResponse } from 'next/server';
import { conversationDb } from '@/lib/db-fallback';

// GET /api/chat/conversations - Load conversations by device ID or user ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const deviceId = searchParams.get('deviceId');
    const userId = searchParams.get('userId');

    if (!deviceId && !userId) {
      return NextResponse.json(
        { error: 'Either deviceId or userId is required' },
        { status: 400 }
      );
    }

    let conversations;
    
    if (userId) {
      // Load conversations by user ID (authenticated user)
      conversations = await conversationDb.findMany({
        user_id: userId,
      });
    } else {
      // Load conversations by device ID (anonymous user)
      conversations = await conversationDb.findMany({
        user_id: deviceId,
        conversation_type: 'Anonymous',
      });
    }

    // Transform the data to match the expected format
    const transformedConversations = conversations.map((conv: any) => ({
      id: conv.id,
      title: conv.title || 'New Chat',
      lastMessage: conv.messages[0]?.content || '',
      timestamp: conv.updated_at,
      messageCount: conv._count?.messages || 0,
      conversationType: conv.conversation_type?.toLowerCase() || 'anonymous',
      contextData: conv.context_data,
      migratedAt: conv.migrated_at,
    }));

    return NextResponse.json({
      conversations: transformedConversations,
      success: true,
    });

  } catch (error) {
    console.error('Error loading conversations:', error);
    return NextResponse.json(
      { error: 'Failed to load conversations', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// POST /api/chat/conversations - Create a new conversation
export async function POST(request: NextRequest) {
  try {
    console.log('🔄 Creating new conversation...');
    
    const body = await request.json();
    const { deviceId, conversationType = 'anonymous', title = 'New Chat', contextData = {} } = body;

    console.log('📝 Request data:', { deviceId, conversationType, title });

    if (!deviceId) {
      console.log('❌ Missing deviceId');
      return NextResponse.json(
        { error: 'deviceId is required' },
        { status: 400 }
      );
    }

    // Create new conversation using fallback system
    console.log('💾 Creating conversation in database...');
    const conversation = await conversationDb.create({
      user_id: deviceId, // This is the device_id
      conversation_type: conversationType === 'anonymous' ? 'Anonymous' : 'Authenticated',
      title,
      context_data: contextData,
    });

    console.log('✅ Conversation created successfully:', conversation.id);

    return NextResponse.json({
      conversationId: conversation.id,
      conversation: {
        id: conversation.id,
        title: conversation.title,
        lastMessage: '',
        timestamp: conversation.created_at,
        messageCount: 0,
        conversationType: conversation.conversation_type?.toLowerCase() || 'anonymous',
        contextData: conversation.context_data,
        migratedAt: conversation.migrated_at,
      },
      success: true,
    });

  } catch (error: any) {
    console.error('❌ Error creating conversation:', error);
    console.error('❌ Error details:', {
      message: error?.message,
      code: error?.code,
      meta: error?.meta
    });
    return NextResponse.json(
      { 
        error: 'Failed to create conversation',
        details: error?.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// DELETE /api/chat/conversations - Delete all conversations for a user
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    console.log('🗑️ DELETE REQUEST - Deleting all conversations for user:', userId);

    // Find all conversations for this user using fallback
    const conversations = await conversationDb.findMany({
      user_id: userId,
    });

    console.log('📋 Found conversations to delete:', conversations.length);

    const conversationIds = conversations.map((c: any) => c.id);

    if (conversationIds.length > 0) {
      // Delete all messages for these conversations first using fallback
      const { messageDb } = await import('@/lib/db-fallback');
      const deletedMessages = await messageDb.deleteMany({
        conversation_id: { in: conversationIds }
      });
      
      console.log('🗑️ Deleted messages:', deletedMessages.count);

      // Delete all conversations using fallback
      const result = await conversationDb.deleteMany({
        user_id: userId
      });

      console.log('✅ Deleted conversations:', result.count);

      return NextResponse.json({
        success: true,
        deletedCount: result.count,
        deletedMessages: deletedMessages.count,
        message: `Successfully deleted ${result.count} conversation(s) and ${deletedMessages.count} message(s)`
      });
    }

    console.log('⚠️ No conversations found to delete');

    return NextResponse.json({
      success: true,
      deletedCount: 0,
      message: 'No conversations to delete'
    });

  } catch (error: any) {
    console.error('❌ Error deleting conversations:', error);
    return NextResponse.json(
      { error: 'Failed to delete conversations', details: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
