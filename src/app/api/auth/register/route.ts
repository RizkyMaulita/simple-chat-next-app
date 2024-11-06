import { createUser } from "@/db/models/user";
import { ResponseAPIType } from "@/lib/types/response.types";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";

const registerSchema = z.object({
  username: z
    .string({ message: `Username is required` })
    .min(1, { message: `Username is required` }),
  email: z
    .string({ message: `Email is required` })
    .email({ message: `Invalid email format` }),
  password: z
    .string({ message: `Password is required` })
    .min(7, { message: `Password minimum characters is 7` }),
});

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const parsedSchema = registerSchema.safeParse(reqBody);

    if (!parsedSchema.success) {
      throw parsedSchema.error;
    }

    const user = await createUser(parsedSchema.data);

    return NextResponse.json<ResponseAPIType<User>>(
      {
        status: 201,
        message: `Successfully register user`,
        data: user,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      const errMessages = error.issues.map((issue) => issue.message);

      return NextResponse.json<ResponseAPIType<unknown>>(
        {
          status: 400,
          error: errMessages,
        },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json<ResponseAPIType<unknown>>(
        {
          status: 400,
          error: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json<ResponseAPIType<unknown>>(
      {
        status: 500,
        error: `An error occured while register`,
      },
      { status: 500 }
    );
  }
}
