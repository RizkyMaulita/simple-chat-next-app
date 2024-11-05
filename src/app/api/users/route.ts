import { getAllUser } from "@/db/models/user";
import { ResponseAPIType } from "@/lib/types/response.types";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const userId = request.headers.get("x-user-id") || "";

    const users = await getAllUser({ NOT: { id: userId } });

    return NextResponse.json<ResponseAPIType<User[]>>(
      {
        status: 200,
        message: `Successfully retrieved data users`,
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json<ResponseAPIType<unknown>>(
      {
        status: 500,
        error: `An error occured while retrieved data users`,
      },
      { status: 500 }
    );
  }
};
