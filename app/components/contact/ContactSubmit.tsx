"use client";

import { submitAtom } from "@/app/config/context/SubmitContext";
import { useAtom } from "jotai";
import Image from "next/image";

export default function ContactSubmit() {

  const [submitted] = useAtom(submitAtom);
  return (
    <>
      {submitted ? (
        <button
          type="submit"
          disabled={submitted}
          className="bg-gray-300 text-black w-60 h-20 rounded-md px-2"
        >
          <div className="flex justify-around items-center">
            <Image
              src="./checkmark.svg"
              alt="Submitted!"
              width={24}
              height={24}
            />
            <p>Successfully Submitted!</p>
          </div>
        </button>
      ) : (
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 px-8 py-2 duration-75 ease-in-out rounded-md"
        >
          Submit
        </button>
      )}
    </>
  );
}
