"use server";

import nodeMailer from "nodemailer";

import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  async function main() {
    const html = `<p>${body.body}</p>`;

    const message = {
      name: body.name,
      email: "kdwilbusiness@gmail.com",
      to: "kdwilbusiness@gmail.com",
      subject: body.subject,
      text: body.body,
      html: html,
    };
    console.log(message);
    try {
      const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: "kdwilbusiness@gmail.com",
          pass: "Catinahat1!",
        },
      });

      await transporter.sendMail({
        ...message,
      });
    } catch (error) {
      console.error(error);
    }
  }
  main();
}
