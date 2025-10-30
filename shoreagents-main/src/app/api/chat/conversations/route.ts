import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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
      conversations = await prisma.conversation.findMany({
        where: {
          user_id: userId,
        },
        include: {
          messages: {
            orderBy: { created_at: 'desc' },
            take: 1, // Get only the last message for preview
          },
          _count: {
            select: { messages: true }
          }
        },
        orderBy: { updated_at: 'desc' },
      });
    } else {
      // Load conversations by device ID (anonymous user)
      conversations = await prisma.conversation.findMany({
        where: {
          user_id: deviceId,
          conversation_type: 'Anonymous',
        },
        include: {
          messages: {
            orderBy: { created_at: 'desc' },
            take: 1, // Get only the last message for preview
          },
          _count: {
            select: { messages: true }
          }
        },
        orderBy: { updated_at: 'desc' },
      });
    }

    // Transform the data to match the expected format
    const transformedConversations = conversations.map(conv => ({
      id: conv.id,
      title: conv.title || 'New Chat',
      lastMessage: conv.messages[0]?.content || '',
      timestamp: conv.updated_at,
      messageCount: conv._count.messages,
      conversationType: conv.conversation_type.toLowerCase(),
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
      { error: 'Failed to load conversations' },
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

    // Create new conversation
    console.log('💾 Creating conversation in database...');
    const conversation = await prisma.conversation.create({
      data: {
        user_id: deviceId, // This is the device_id
        conversation_type: conversationType === 'anonymous' ? 'Anonymous' : 'Authenticated',
        title,
        context_data: contextData,
      },
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
        conversationType: conversation.conversation_type.toLowerCase(),
        contextData: conversation.context_data,
        migratedAt: conversation.migrated_at,
      },
      success: true,
    });

  } catch (error) {
    console.error('❌ Error creating conversation:', error);
    console.error('❌ Error details:', {
      message: error.message,
      code: error.code,
      meta: error.meta
    });
    return NextResponse.json(
      { 
        error: 'Failed to create conversation',
        details: error.message 
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

    // Find all conversations for this user
    const conversations = await prisma.conversation.findMany({
      where: { user_id: userId },
      select: { id: true, title: true }
    });

    console.log('📋 Found conversations to delete:', conversations.length, conversations);

    const conversationIds = conversations.map(c => c.id);

    if (conversationIds.length > 0) {
      // Delete all messages for these conversations first
      const deletedMessages = await prisma.message.deleteMany({
        where: {
          conversation_id: { in: conversationIds }
        }
      });
      
      console.log('🗑️ Deleted messages:', deletedMessages.count);

      // Delete all conversations
      const result = await prisma.conversation.deleteMany({
        where: { user_id: userId }
      });

      console.log('✅ Deleted conversations:', result.count);
      
      // Verify deletion
      const remainingConversations = await prisma.conversation.findMany({
        where: { user_id: userId }
      });
      
      console.log('🔍 Remaining conversations after delete:', remainingConversations.length);

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

  } catch (error) {
    console.error('❌ Error deleting conversations:', error);
    return NextResponse.json(
      { error: 'Failed to delete conversations', details: error.message },
      { status: 500 }
    );
  }
}
