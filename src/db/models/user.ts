import { Prisma } from "@prisma/client";
import prisma from "..";
import { hashText } from "../utils/hash";

export const createUser = async (payload: Prisma.UserCreateInput) => {
  const isExistUser = await prisma.user.findFirst({
    where: {
      OR: [{ username: payload.username }, { email: payload.email }],
    },
  });

  if (isExistUser) {
    if (isExistUser.username === payload.username) {
      throw new Error(`Username has already exists`);
    }
    throw new Error(`Email has already exists`);
  }

  const user = await prisma.user.create({
    data: {
      email: payload.email,
      username: payload.username,
      password: hashText(payload.password),
    },
  });

  Reflect.deleteProperty(user, "password");

  return user;
};

export const getUserByAuth = async (auth: string) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ username: auth }, { email: auth }],
    },
  });

  return user;
};
