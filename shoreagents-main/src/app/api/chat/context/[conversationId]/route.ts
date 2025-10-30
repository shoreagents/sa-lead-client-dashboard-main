import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/chat/context/[conversationId] - Get conversation context
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  try {
    const { conversationId } = await params;

    if (!conversationId) {
      return NextResponse.json(
        { error: 'conversationId is required' },
        { status: 400 }
      );
    }

    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      select: {
        id: true,
        user_id: true,
        conversation_type: true,
        title: true,
        context_data: true,
        created_at: true,
        updated_at: true,
        migrated_at: true,
      },
    });

    if (!conversation) {
      return NextResponse.json(
        { error: 'Conversation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      context: {
        deviceId: conversation.user_id,
        conversationType: conversation.conversation_type.toLowerCase(),
        title: conversation.title,
        contextData: conversation.context_data,
        createdAt: conversation.created_at,
        updatedAt: conversation.updated_at,
        migratedAt: conversation.migrated_at,
      },
      success: true,
    });

  } catch (error) {
    console.error('Error loading conversation context:', error);
    return NextResponse.json(
      { error: 'Failed to load conversation context' },
      { status: 500 }
    );
  }
}

// PUT /api/chat/context/[conversationId] - Update conversation context
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  try {
    const { conversationId } = await params;
    const body = await request.json();
    const { contextData, title } = body;

    if (!conversationId) {
      return NextResponse.json(
        { error: 'conversationId is required' },
        { status: 400 }
      );
    }

    const updateData: any = {
      updated_at: new Date(),
    };

    if (contextData !== undefined) {
      updateData.context_data = contextData;
    }

    if (title !== undefined) {
      updateData.title = title;
    }

    const conversation = await prisma.conversation.update({
      where: { id: conversationId },
      data: updateData,
      select: {
        id: true,
        user_id: true,
        conversation_type: true,
        title: true,
        context_data: true,
        created_at: true,
        updated_at: true,
        migrated_at: true,
      },
    });

    return NextResponse.json({
      context: {
        deviceId: conversation.user_id,
        conversationType: conversation.conversation_type.toLowerCase(),
        title: conversation.title,
        contextData: conversation.context_data,
        createdAt: conversation.created_at,
        updatedAt: conversation.updated_at,
        migratedAt: conversation.migrated_at,
      },
      success: true,
    });

  } catch (error) {
    console.error('Error updating conversation context:', error);
    return NextResponse.json(
      { error: 'Failed to update conversation context' },
      { status: 500 }
    );
  }
}
