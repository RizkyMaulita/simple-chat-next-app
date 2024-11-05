import jwt, { JwtPayload } from "jsonwebtoken";

import * as jose from "jose";

const SECRET_KEY = process.env.JWT_SECRET || "secret";

type JwtPayloadType = JwtPayload & { id: string; email: string };

export const generateToken = (payload: JwtPayloadType) => {
  return jwt.sign(payload, SECRET_KEY);
};

export const verifyToken = async (token: string) => {
  const secretKey = new TextEncoder().encode(SECRET_KEY);
  const payloadJose = await jose.jwtVerify<JwtPayloadType>(token, secretKey);

  return payloadJose.payload;
};
