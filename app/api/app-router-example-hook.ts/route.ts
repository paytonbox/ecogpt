// packages
import { NextResponse } from "next/server";
import twilio from "twilio";

// types
import type { NextRequest } from "next/server";

// constants
const { MessagingResponse } = twilio.twiml;

export function GET(request: NextRequest) {
  const twiml = new MessagingResponse();

  twiml.message("This is a test");

  return NextResponse.json(
    {
      body: twiml.toString(),
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    }
  );
}
