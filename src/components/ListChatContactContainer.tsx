"use client";
import { User } from "@prisma/client";
import UserContactRow from "./UserContactRow";
import { useContext, useEffect } from "react";
import { ChatContext } from "@/context/ChatContext";
import { ChatSummaryFirebaseType } from "@/lib/types/firebase.types";

type Props = {
  users: User[];
  summaries: ChatSummaryFirebaseType[];
};

export default function ListChatContactContainer({ users, summaries }: Props) {
  const { selectedContact, setSelectedContact } = useContext(ChatContext);

  useEffect(() => {
    if (!selectedContact) {
      setSelectedContact?.(users[0]);
    }
  }, []);

  return (
    <section
      id="list-chat-container"
      className="container-contact h-full bg-slate-200 overflow-y-auto border-l border-r"
    >
      {/* Search Contact */}
      <div className="sticky top-0 p-4 bg-white h-[7.5rem] z-10">
        <div className="h-[60px]">
          <form className="flex flex-col items-center justify-center">
            <label className="w-[90%] input input-bordered rounded-2xl flex items-center gap-2 bg-slate-100">
              <input type="text" className="grow" placeholder="Search..." />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </form>
        </div>
        <div className="divider"></div>
      </div>

      {/* List Chat */}
      <section className="flex-1 overflow-y-auto pt-[10px] bg-slate-200 px-2 space-y-2">
        {users?.map((user, idx) => (
          <UserContactRow
            key={user.id}
            user={user}
            index={idx}
            summaries={summaries}
          />
        ))}
      </section>
    </section>
  );
}
