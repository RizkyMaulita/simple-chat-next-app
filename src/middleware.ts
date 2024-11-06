import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/utils/jwt";

export async function middleware(request: NextRequest) {
  const token = cookies().get("access_token");

  if (!token) {
    return NextResponse.json({ statusCode: 401, error: "Unauthorized" });
  }

  const decodedToken = await verifyToken(token.value);

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-user-id", decodedToken.id);
  requestHeaders.set("x-user-email", decodedToken.email);

  return NextResponse.next({ headers: requestHeaders });
}

export const config = {
  matcher: ["/api/users/:path*", "/api/auth/me"],
};
