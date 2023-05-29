"use client";

import { useAtom } from "jotai";
import { mobileToggleAtom } from "@/app/config/context/MobileToggle";
import ToggledMobileView from "./ToggledMobileView";

export default function MobileNav() {
  const [mobileToggle] = useAtom(mobileToggleAtom);

  return (
    <nav
      id="mobile-nav"
      className="flex flex-col justify-center items-center sm:hidden w-full h-fit gap-4 bg-emerald-400 z-50"
    >
      {mobileToggle ? <ToggledMobileView /> : null}
    </nav>
  );
}
