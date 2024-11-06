import prisma from "..";

type CreateGroupChatPayload = {
  senderId: string;
  receiverId: string;
  message: string;
  summaryChatId?: string;
  historyChatId?: string;
};

export const createGroupChat = async ({
  senderId,
  receiverId,
  message,
  summaryChatId,
  historyChatId,
}: CreateGroupChatPayload) => {
  return await prisma.$transaction(async (trx) => {
    const groupChat = await trx.groupChat.create({
      data: {
        lastMessage: message,
        lastSenderId: senderId,
        summaryChatId,
        historyChatId,
        updatedAt: new Date(),
      },
    });

    await trx.groupChatMember.createMany({
      data: [
        { userId: senderId, groupChatId: groupChat.id },
        { userId: receiverId, groupChatId: groupChat.id },
      ],
    });

    return groupChat;
  });
};

export const getUserGroupChats = async (userId: string) => {
  const groups = await prisma.groupChatMember.findMany({
    where: { userId },
    select: { groupChatId: true },
  });

  if (!groups.length) return [];

  const chatIds = groups.map((group) => group.groupChatId);

  const users = await prisma.user.findMany({
    where: {
      groupChatMembers: {
        some: {
          groupChatId: { in: chatIds },
        },
      },
      id: { not: userId },
    },
  });

  return users;
};
