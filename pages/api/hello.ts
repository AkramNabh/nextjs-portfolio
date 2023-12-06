import EmailTemplate from "@/components/emailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";
import { NextApiRequest, NextApiResponse } from "next";
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const body = JSON.parse(req.body);
    const { data, error } = await resend.emails.send({
      from: "Coming from Portfolio <akramnabh@akramnabh.com>",
      to: ["akramnabh@gmail.com"],
      subject: body.subject,
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        message: body.message,
      }) as React.ReactElement,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
