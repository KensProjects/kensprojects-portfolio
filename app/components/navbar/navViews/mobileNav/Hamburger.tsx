"use client";
import { useAtom } from "jotai";
import { mobileToggleAtom } from "@/app/config/context/MobileToggle";

export default function Hamburger() {
  const [mobileToggle, setMobileToggle] = useAtom(mobileToggleAtom);

  function handleMobileToggle() {
    setMobileToggle((prev) => !prev);
  }
  return (
    <div
      className="bg-gray-300 pt-2.5 pb-1 px-2 h-fit w-fit  cursor-pointer sm:hidden absolute top-5 right-2 rounded-lg"
      onClick={handleMobileToggle}
    >
      <button type="button" className="space-y-2">
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </button>
    </div>
  );
}
