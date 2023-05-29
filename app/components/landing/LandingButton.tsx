export default function LandingButton({
  type,
  href,
  target,
}: {
  type: "Projects" | "Resume" | "GitHub" | "Contact";
  href: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      className="flex justify-center items-center bg-cyan-500 hover:bg-cyan-300 duration-75 ease-in-out text-white h-14 w-32 rounded-lg"
    >
      {type}
    </a>
  );
}
