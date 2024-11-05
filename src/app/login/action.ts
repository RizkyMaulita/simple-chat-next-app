"use server";

import { redirect } from "next/navigation";
import { BASE_URL } from "../config";
import { ResponseAPIType } from "@/lib/types/response.types";
import { cookies } from "next/headers";

export const onLogin = async (formData: FormData) => {
  const form = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const request = await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const reqJSON = (await request.json()) as ResponseAPIType<{ token: string }>;

  if (!request.ok) {
    const errMessage =
      (reqJSON?.error as string) || reqJSON?.message || "Internal Server Error";
    throw new Error(errMessage);
  }

  if (!reqJSON.data?.token) {
    throw new Error(`An error occured while login`);
  }

  cookies().set("access_token", reqJSON.data?.token, {
    sameSite: "strict",
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days
  });

  return redirect("/");
};

export const onLogout = async () => {
  cookies().delete("access_token");

  return redirect("/login");
};
