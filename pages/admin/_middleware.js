import { getCookie, setCookies } from "cookies-next";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export default function middleware(req) {
  let { token } = req.cookies;
  let { origin } = req.nextUrl;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
