import { NextRequest, NextResponse } from 'next/server';
import { messageDb, conversationDb } from '@/lib/db-fallback';

// GET /api/chat/messages - Load messages for a conversation
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get('conversationId');

    if (!conversationId) {
      return NextResponse.json(
        { error: 'conversationId is required' },
        { status: 400 }
      );
    }

    const messages = await messageDb.findMany({
      conversation_id: conversationId,
    });

    // Transform the data to match the expected format
    const transformedMessages = messages.map((msg: any) => ({
      id: msg.id,
      role: msg.role?.toLowerCase() || 'user',
      content: msg.content,
      timestamp: msg.created_at,
      contextSnapshot: msg.context_snapshot,
    }));

    return NextResponse.json({
      messages: transformedMessages,
      success: true,
    });

  } catch (error: any) {
    console.error('Error loading messages:', error);
    return NextResponse.json(
      { error: 'Failed to load messages', details: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}

// POST /api/chat/messages - Save a new message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      conversationId, 
      userId, // This is the device_id
      role, 
      content, 
      contextSnapshot = null 
    } = body;

    if (!conversationId || !userId || !role || !content) {
      return NextResponse.json(
        { error: 'conversationId, userId, role, and content are required' },
        { status: 400 }
      );
    }

    // Create new message using fallback
    const message = await messageDb.create({
      conversation_id: conversationId,
      user_id: userId, // Device ID
      role: role === 'user' ? 'User' : 'Assistant',
      content,
      context_snapshot: contextSnapshot,
    });

    // If this is the first user message, update the conversation title
    if (role === 'user') {
      const messageCount = await conversationDb.count({
        conversation_id: conversationId,
        role: 'User',
      });

      // Update title if this is the first user message
      if (messageCount === 1) {
        const title = content.length > 50 ? `${content.substring(0, 50)}...` : content;
        await conversationDb.update(
          { id: conversationId },
          {
            title,
            updated_at: new Date(),
          }
        );
      } else {
        // Just update the updated_at timestamp
        await conversationDb.update(
          { id: conversationId },
          { updated_at: new Date() }
        );
      }
    } else {
      // For assistant messages, just update timestamp
      await conversationDb.update(
        { id: conversationId },
        { updated_at: new Date() }
      );
    }

    return NextResponse.json({
      message: {
        id: message.id,
        role: message.role?.toLowerCase() || role,
        content: message.content,
        timestamp: message.created_at,
        contextSnapshot: message.context_snapshot,
      },
      success: true,
    });

  } catch (error: any) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Failed to save message', details: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}



