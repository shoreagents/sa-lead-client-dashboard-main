import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT /api/chat/migrate - Migrate anonymous conversations to authenticated user
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, deviceId } = body;

    console.log('🔄 Migration request received:', { userId, deviceId });

    if (!userId || !deviceId) {
      console.log('❌ Missing required parameters');
      return NextResponse.json(
        { error: 'userId and deviceId are required' },
        { status: 400 }
      );
    }

    // Validate that userId and deviceId are different
    if (userId === deviceId) {
      console.log('⚠️ userId and deviceId are the same, no migration needed');
      return NextResponse.json({
        message: 'No migration needed - user ID and device ID are the same',
        migratedCount: 0,
        success: true,
      });
    }

    // Find all anonymous conversations for this device
    const anonymousConversations = await prisma.conversation.findMany({
      where: {
        user_id: deviceId,
        conversation_type: 'Anonymous',
      },
    });

    console.log(`📊 Found ${anonymousConversations.length} anonymous conversations to migrate`);

    if (anonymousConversations.length === 0) {
      console.log('ℹ️ No anonymous conversations found to migrate');
      return NextResponse.json({
        message: 'No anonymous conversations found to migrate',
        migratedCount: 0,
        success: true,
      });
    }

    // Update conversations to be associated with the user
    const updateResult = await prisma.conversation.updateMany({
      where: {
        user_id: deviceId,
        conversation_type: 'Anonymous',
      },
      data: {
        user_id: userId, // Update to user ID
        conversation_type: 'Authenticated',
        migrated_at: new Date(),
      },
    });

    console.log(`✅ Updated ${updateResult.count} conversations`);

    // Also update all messages in these conversations
    const messageUpdateResult = await prisma.message.updateMany({
      where: {
        user_id: deviceId,
        conversation: {
          conversation_type: 'Authenticated',
          migrated_at: { not: null },
        },
      },
      data: {
        user_id: userId, // Update to user ID
      },
    });

    console.log(`✅ Updated ${messageUpdateResult.count} messages`);

    return NextResponse.json({
      message: `Successfully migrated ${updateResult.count} conversations and ${messageUpdateResult.count} messages`,
      migratedCount: updateResult.count,
      success: true,
    });

  } catch (error) {
    console.error('Error migrating conversations:', error);
    return NextResponse.json(
      { error: 'Failed to migrate conversations' },
      { status: 500 }
    );
  }
}
