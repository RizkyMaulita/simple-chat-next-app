"use server";

import { CHAT_HISTORY_COL_NAME, CHAT_SUMMARY_COL_NAME } from "@/db/firebase";
import { createGroupChat } from "@/db/models/chat";
import { db } from "@/firebase";
import {
  ChatMsgFirebaseType,
  ChatHistoryFirebaseType,
  ChatSummaryFirebaseType,
} from "@/lib/types/firebase.types";
import { generateId } from "@/lib/utils/generateId";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { redirect } from "next/navigation";

export const createChat = async ({
  senderId,
  message,
  receiverId,
}: {
  senderId: string;
  message: string;
  receiverId: string;
}) => {
  const payloadMsg: ChatMsgFirebaseType = {
    senderId,
    message,
    createdAt: Timestamp.now(),
  };
  const payloadHistory: ChatHistoryFirebaseType = {
    userIds: [senderId, receiverId],
    lastMessage: message,
    lastSenderId: senderId,
    updatedAt: Timestamp.now(),
    messages: [payloadMsg],
  };
  const payloadSummary: ChatSummaryFirebaseType = {
    userIds: payloadHistory.userIds,
    lastSenderId: senderId,
    lastMessage: message,
    isRead: false,
    updatedAt: Timestamp.now(),
  };
  const historyId = generateId();
  const summaryId = generateId();

  const docHisRef = doc(db, CHAT_HISTORY_COL_NAME, historyId);
  await setDoc(docHisRef, payloadHistory);

  const docSumRef = doc(db, CHAT_SUMMARY_COL_NAME, summaryId);
  await setDoc(docSumRef, payloadSummary);

  await createGroupChat({
    senderId,
    receiverId,
    message,
    summaryChatId: summaryId,
    historyChatId: historyId,
  });

  redirect("/");
};
