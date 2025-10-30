import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// DELETE /api/chat/conversations/[conversationId] - Delete a single conversation
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  try {
    const { conversationId } = await params;

    if (!conversationId) {
      return NextResponse.json(
        { error: 'Conversation ID is required' },
        { status: 400 }
      );
    }

    console.log('🗑️ DELETE REQUEST - Deleting conversation:', conversationId);

    // First, delete all messages for this conversation
    const deletedMessages = await prisma.message.deleteMany({
      where: {
        conversation_id: conversationId
      }
    });
    
    console.log('🗑️ Deleted messages:', deletedMessages.count);

    // Then delete the conversation
    const deletedConversation = await prisma.conversation.delete({
      where: {
        id: conversationId
      }
    });

    console.log('✅ Deleted conversation:', deletedConversation.id);

    return NextResponse.json({
      success: true,
      deletedConversationId: conversationId,
      deletedMessages: deletedMessages.count,
      message: `Successfully deleted conversation and ${deletedMessages.count} message(s)`
    });

  } catch (error) {
    console.error('❌ Error deleting conversation:', {
      error: error,
      message: error?.message,
      name: error?.name,
      code: error?.code,
      conversationId: conversationId
    });
    return NextResponse.json(
      { 
        error: 'Failed to delete conversation', 
        details: error?.message || 'Unknown error',
        conversationId: conversationId
      },
      { status: 500 }
    );
  }
}
