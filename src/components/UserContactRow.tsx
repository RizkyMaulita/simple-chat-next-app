"use client";
import { User } from "@prisma/client";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { ChatContext } from "@/context/ChatContext";
import { ChatSummaryFirebaseType } from "@/lib/types/firebase.types";
import { displayTime } from "@/lib/utils/date";

interface Props {
  user: User;
  index: number;
  summaries: ChatSummaryFirebaseType[];
}

export default function UserContactRow({ user, index, summaries }: Props) {
  const { selectedContact, setSelectedContact } = useContext(ChatContext);

  const onSelect = useCallback(() => {
    setSelectedContact?.(user);
  }, [user]);

  const isSelected = useMemo(
    () => user.id === selectedContact?.id,
    [user, selectedContact]
  );

  const summary = useMemo(() => {
    const chat = summaries.find((el) => el.userIds.includes(user.id));
    return {
      id: chat?.id || "",
      message: chat?.lastMessage || "",
      isRead: chat?.isRead,
      updatedAt: chat?.updatedAt,
    };
  }, [user, summaries]);

  return (
    <div
      onClick={onSelect}
      className={`h-[7rem] rounded-lg flex p-2 items-center cursor-pointer ${
        isSelected ? "bg-slate-300" : "bg-white"
      }`}
    >
      <div className="w-[17%] h-full flex justify-center items-center">
        <Avatar user={user} />
      </div>
      <div className="w-[68%] h-full  pl-2 flex flex-col justify-center gap-1">
        <p className="text-lg font-semibold">{user.username}</p>
        <p className="font-light text-gray-700 truncate">{summary.message}</p>
      </div>
      <div className="w-[15%] h-full  flex flex-col justify-center items-end pr-2 gap-2">
        <p className="font-light text-gray-700">
          {displayTime(summary.updatedAt as Date)}
        </p>
        {summary.isRead ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <div className="badge badge-primary badge-md">1</div>
        )}
      </div>
    </div>
  );
}
