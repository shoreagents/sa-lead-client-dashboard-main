import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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

    const messages = await prisma.message.findMany({
      where: {
        conversation_id: conversationId,
      },
      orderBy: { created_at: 'asc' },
    });

    // Transform the data to match the expected format
    const transformedMessages = messages.map(msg => ({
      id: msg.id,
      role: msg.role.toLowerCase(),
      content: msg.content,
      timestamp: msg.created_at,
      contextSnapshot: msg.context_snapshot,
    }));

    return NextResponse.json({
      messages: transformedMessages,
      success: true,
    });

  } catch (error) {
    console.error('Error loading messages:', error);
    return NextResponse.json(
      { error: 'Failed to load messages' },
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

    // Create new message
    const message = await prisma.message.create({
      data: {
        conversation_id: conversationId,
        user_id: userId, // Device ID
        role: role === 'user' ? 'User' : 'Assistant',
        content,
        context_snapshot: contextSnapshot,
      },
    });

    // If this is the first user message, update the conversation title
    if (role === 'user') {
      const messageCount = await prisma.message.count({
        where: {
          conversation_id: conversationId,
          role: 'User',
        },
      });

      // Update title if this is the first user message
      if (messageCount === 1) {
        const title = content.length > 50 ? `${content.substring(0, 50)}...` : content;
        await prisma.conversation.update({
          where: { id: conversationId },
          data: {
            title,
            updated_at: new Date(),
          },
        });
      } else {
        // Just update the updated_at timestamp
        await prisma.conversation.update({
          where: { id: conversationId },
          data: { updated_at: new Date() },
        });
      }
    } else {
      // For assistant messages, just update timestamp
      await prisma.conversation.update({
        where: { id: conversationId },
        data: { updated_at: new Date() },
      });
    }

    return NextResponse.json({
      message: {
        id: message.id,
        role: message.role.toLowerCase(),
        content: message.content,
        timestamp: message.created_at,
        contextSnapshot: message.context_snapshot,
      },
      success: true,
    });

  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    );
  }
}
