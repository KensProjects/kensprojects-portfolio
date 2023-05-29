import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav
      id="desktop-nav"
      className="sm:flex hidden justify-between items-center w-full h-full px-4 text-6xl"
    >
      <h2 className="text-3xl">Kenny Wilson</h2>
      <ul className="flex text-xl gap-8">
        <li className="cursor-pointer text-2xl">
          <Link href="#projects">Projects</Link>
        </li>

        <li className="cursor-pointer text-2xl">
          <Link href="#contact">Contact</Link>
        </li>
        <li className="cursor-pointer text-2xl">
          <Link href="/Resume.pdf" target="_blank">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
