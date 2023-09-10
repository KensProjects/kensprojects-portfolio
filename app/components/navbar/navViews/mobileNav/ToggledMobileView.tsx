import Link from "next/link";
import { useAtom } from "jotai";
import { mobileToggleAtom } from "@/app/config/context/MobileToggle";

export default function ToggledMobileView() {
  const [mobileToggle] = useAtom(mobileToggleAtom);
  return (
    <>
      {mobileToggle && (
        <div className="sm:hidden w-full h-fit bg-emerald-400 flex flex-col justify-center items-center gap-8 pb-4">
          <h2 className="text-3xl">Kenny Wilson</h2>
          <ul className="flex flex-col justify-center items-center text-xl gap-8">
            <li className="cursor-pointer">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#contact">Contact</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="https://github.com/KensProjects" target="_blank">
                GitHub
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/DeveloperResume.pdf" target="_blank">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
