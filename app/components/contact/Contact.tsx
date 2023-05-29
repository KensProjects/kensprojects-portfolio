"use client";

import { useState } from "react";
import { TEmail, emailAction, initialEmail } from "@/app/config/exports/EmailConfig";
import ContactSubmit from "./ContactSubmit";
import { useAtom } from "jotai";
import { submitAtom } from "@/app/config/context/SubmitContext";

export default function Contact() {

  const [emailMessage, setEmailMessage] = useState<TEmail>(initialEmail);

  const [submitted, setSubmitted] = useAtom(submitAtom);

  function handleContact() {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
    setEmailMessage(initialEmail)
  }
  return (
    <section
      className="w-auto h-full flex justify-center items-center text-black bg-white flex-col gap-4 text-center text-xl pb-20"
      id="contact"
    >
      <h2 className="text-4xl">Contact Me!</h2>
      <form
        action={emailAction}
        method="POST"
        onSubmit={handleContact}
        className="flex flex-col justify-betweem items-center border border-black sm:w-3/4 w-full h-full p-4 gap-6 bg-gray-100"
      >
        <div className="flex flex-col justify-start items-start  w-3/4 lg:w-1/2 gap-2">
          <label htmlFor="name">Name:</label>
          <input
            className="border-none ring p-1 rounded-md w-full"
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              setEmailMessage({ ...emailMessage, name: e.target.value })
            }
            value={emailMessage.name}
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start w-3/4 lg:w-1/2 gap-2">
          <label htmlFor="email">Email Address:</label>
          <input
            className="border-none ring p-1 rounded-md w-full"
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setEmailMessage({ ...emailMessage, email: e.target.value })
            }
            value={emailMessage.email}
            required
          />
        </div>

        <div className="flex flex-col justify-start items-start  w-3/4 lg:w-1/2 gap-2">
          <label htmlFor="subject">Subject:</label>
          <input
            className="border-none ring p-1 rounded-md w-full"
            type="text"
            name="subject"
            id="subject"
            onChange={(e) =>
              setEmailMessage({ ...emailMessage, subject: e.target.value })
            }
            value={emailMessage.subject}
            required
          />
        </div>

        <div className="flex flex-col justify-center items-start w-fit gap-2">
          <label htmlFor="body">Body:</label>
          <textarea
            className="p-4 border-none ring w-full h-auto rounded-md"
            name="body"
            id="body"
            onChange={(e) =>
              setEmailMessage({ ...emailMessage, body: e.target.value })
            }
            value={emailMessage.body}
            rows={10}
            cols={75}
            required
          />
        </div>
        <ContactSubmit />
      </form>
    </section>
  );
}
