"use client";

import { User } from "@prisma/client";
import { createContext, useState } from "react";

type ChatValueType = {
  selectedContact?: User;
  setSelectedContact?: (user: User) => void;
};

const initialChatValue: ChatValueType = {
  selectedContact: undefined,
  setSelectedContact: () => {},
};

export const ChatContext = createContext<ChatValueType>(initialChatValue);

type ChatProviderProps = {
  children: React.ReactNode;
};

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [selectedContact, setSelectedContact] = useState<User>();

  return (
    <ChatContext.Provider value={{ selectedContact, setSelectedContact }}>
      {children}
    </ChatContext.Provider>
  );
};
