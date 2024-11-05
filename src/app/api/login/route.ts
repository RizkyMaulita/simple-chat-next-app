import { getUserByAuth } from "@/db/models/user";
import { compareText } from "@/db/utils/hash";
import { ResponseAPIType } from "@/lib/types/response.types";
import { generateToken } from "@/lib/utils/jwt";
import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";

const loginSchema = z.object({
  username: z.string({ message: `Username / Email is required` }),
  password: z.string({ message: `Password is required` }),
});

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();

    const parsedSchema = loginSchema.safeParse(reqBody);

    if (!parsedSchema.success) throw parsedSchema.error;

    const user = await getUserByAuth(parsedSchema.data.username);

    if (!user) throw new Error(`Invalid User`);

    if (!compareText(parsedSchema.data.password, user.password)) {
      throw new Error(`Invalid User`);
    }

    const token = generateToken({ id: user.id, email: user.email });

    return NextResponse.json<ResponseAPIType<{ token: string }>>(
      {
        status: 200,
        message: `Successfully logged in`,
        data: { token },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      const errMessages = error.issues[0].message;

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
        error: `An error occured while login`,
      },
      { status: 500 }
    );
  }
};
