import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(Req) {
  const Auth = Req.headers.get("authorization");
  if (Req.url.includes("api/auth/")) {
    return NextResponse.next();
  }

  if (!Auth) {
    return new NextResponse(JSON.stringify({ message: Req.url }), {
      status: 401,
    });
  }

  return NextResponse.next();
}
