"use server";

import { redirect } from "next/navigation";
import { BASE_URL } from "../config";
import { ResponseAPIType } from "@/lib/types/response.types";
import { User } from "@prisma/client";

export const onRegister = async (formData: FormData) => {
  const repeatPassword = formData.get("repeatPassword");

  const form = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (repeatPassword != form.password) {
    // return redirect(`/register?errors=${"Password doesn't match"}`);
    throw new Error(`Password doesn't match`);
  }

  const request = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const reqJSON = (await request.json()) as ResponseAPIType<User>;

  if (!request.ok) {
    const errMessage =
      (reqJSON?.error as string) || reqJSON?.message || "Internal Server Error";
    // return redirect(`/register?errors=${errMessage}`);

    throw new Error(errMessage);
  }

  redirect("/login");
};
