// packages
import twilio from "twilio";

// types
import type { NextApiRequest, NextApiResponse } from "next";

// constants
const { MessagingResponse } = twilio.twiml;

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const twiml = new MessagingResponse();
  twiml.message("This is a test");
  res.setHeader("content-type", "text/xml");
  res.status(200).send(twiml.toString());
}
