import Sidebar from "@/components/Sidebar";
import ServerProtectedComp from "@/components/ServerProtectedComp";
import { BASE_URL } from "./config";
import { cookies } from "next/headers";
import { ResponseAPIType } from "@/lib/types/response.types";
import { User } from "@prisma/client";
import { ChatProvider } from "@/context/ChatContext";
import MainChatContainer from "@/components/MainChatContainer";
import ListChatContactContainer from "@/components/ListChatContactContainer";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { ChatSummaryFirebaseType } from "@/lib/types/firebase.types";
import { CHAT_SUMMARY_COL_NAME } from "@/db/firebase";
import { convertTimestampToDate } from "@/lib/utils/date";

export const metadata = {
  title: "LitChat App",
  openGraph: {
    title: "LitChat App",
  },
};

async function getUserGroupChats() {
  const response = await fetch(`${BASE_URL}/api/users/groupChats`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  const resJSON = (await response.json()) as ResponseAPIType<User[]>;

  return resJSON.data || [];
}

export async function getSummaryChats() {
  const querySnapshot = await getDocs(collection(db, CHAT_SUMMARY_COL_NAME));

  let data: ChatSummaryFirebaseType[] = [];

  querySnapshot.forEach((doc) => {
    const docData = doc.data() as ChatSummaryFirebaseType;
    data.push({
      ...docData,
      id: doc.id,
      updatedAt: convertTimestampToDate(docData.updatedAt as Timestamp),
    });
  });

  return data;
}

export const getUserLogin = async () => {
  const response = await fetch(`${BASE_URL}/api/auth/me`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  const responseJSON = (await response.json()) as ResponseAPIType<User>;

  if (!response.ok) {
    throw new Error(`An error occured while retrieved data auth me`);
  }

  return responseJSON.data;
};

export default async function Home() {
  const userLogin = await getUserLogin();
  const users = await getUserGroupChats();
  const summaryChats = await getSummaryChats();

  return (
    <ServerProtectedComp>
      <ChatProvider>
        <div className="flex h-screen bg-slate-200">
          <Sidebar />

          {/* List Chat Container */}
          <ListChatContactContainer users={users} summaries={summaryChats} />

          {/* Main Chat Container */}
          <MainChatContainer userId={userLogin?.id || ""} />
        </div>
      </ChatProvider>
    </ServerProtectedComp>
  );
}
