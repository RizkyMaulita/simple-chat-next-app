import { Timestamp } from "firebase/firestore";

export type ChatSummaryFirebaseType = {
  id?: string;
  userIds: string[];
  lastSenderId: string;
  lastMessage: string;
  isRead: boolean;
  updatedAt: Timestamp | Date;
};

export type ChatHistoryFirebaseType = {
  id?: string;
  userIds: string[];
  lastMessage: string;
  lastSenderId: string;
  updatedAt: Timestamp | Date;
  messages: ChatMsgFirebaseType[];
};

export type ChatMsgFirebaseType = {
  senderId: string;
  message: string;
  createdAt: Timestamp | Date;
};
