"use client";

import {
  faEllipsisV,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatMessageRow from "./ChatMessageRow";
import { useCallback, useContext, useState } from "react";
import { ChatContext } from "@/context/ChatContext";
import { createChat } from "@/app/actions";

type Props = {
  userId: string;
};

export default function MainChatContainer({ userId }: Props) {
  const { selectedContact } = useContext(ChatContext);
  const [form, setForm] = useState<string>("");

  const onSendChat = useCallback(async () => {
    try {
      await createChat({
        senderId: userId,
        message: form,
        receiverId: selectedContact?.id || "",
      });
      setForm("");
    } catch (error) {
      console.log(error);
    }
  }, [form, userId, selectedContact]);

  return (
    <section
      id="main-chat-container"
      className="container-chat flex flex-col h-full bg-white rounded-r-[30px]"
    >
      <div className="bg-white p-4 h-[8rem] rounded-tr-[30px]">
        <div className="h-[60px] px-[25px] flex justify-between items-center">
          <div>
            <p className="text-2xl">
              {selectedContact?.username || "Username"}
            </p>
            <p className="text-gray-500">Online</p>
          </div>
          <div className="flex flex-row gap-[30px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[23px]" />
            <FontAwesomeIcon icon={faPhone} className="text-[23px]" />
            <FontAwesomeIcon icon={faEllipsisV} className="text-[23px]" />
          </div>
        </div>
        <div className="divider"></div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 space-y-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, idx) => (
          <ChatMessageRow
            key={`msg-${el}-${idx}`}
            isStart={idx % 2 === 0}
            message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${idx}....`}
          />
        ))}
      </div>

      <div className="p-4 mt-3 flex items-center">
        <input
          value={form}
          onChange={(e) => setForm(e.target.value)}
          type="text"
          placeholder="Ketik pesan..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onSendChat}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg cursor-pointer"
        >
          Send
        </button>
      </div>
    </section>
  );
}
