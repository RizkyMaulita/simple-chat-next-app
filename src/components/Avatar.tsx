"use client";
import { User } from "@prisma/client";
import { useMemo } from "react";

interface Props {
  user: User;
}

export default function Avatar({ user }: Props) {
  const initial = useMemo(() => {
    const splitNames = user.username.split(" ");
    if (splitNames.length > 1) return splitNames[0][0] + splitNames[1][0];

    return splitNames[0][0];
  }, [user]);
  return (
    <div className="avatar placeholder">
      <div className="bg-stone-500 text-neutral-content w-[3.5rem] rounded-full">
        <span className="text-3xl">{initial.toUpperCase()}</span>
      </div>
    </div>
  );
}
