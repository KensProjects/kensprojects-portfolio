import LandingButton from "./LandingButton";

export default function Landing() {
  return (
    <section
      id="landing"
      className="w-auto h-auto overflow-hidden flex flex-col justify-center bg-white text-2xl text-black font-lighter gap-16 items-center py-4 bg-city bg-center bg-no-repeat bg-cover"
    >
      <div
        id="landing-header-group"
        className="text-center text-3xl bg-gray-300 p-1 rounded-md w-auto h-auto"
      >
        <h1 className="w-auto h-auto">Kenny Wilson,</h1>
        <h2 className="text-yellow-700 w-auto h-auto">Web Developer</h2>
      </div>
      <p className="text-md bg-gray-200 p-1 rounded-md text-center w-auto h-auto">
        I am a full-stack developer that enjoys creating applications and
        tackling problems.
      </p>
      <div id="landing-button-group" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-auto w-auto">
        <LandingButton type="Projects" href="#projects" />
        <LandingButton type="Contact" href="#contact" />
        <LandingButton
          type="GitHub"
          href="https://github.com/KensProjects"
          target="_blank"
        />
        <LandingButton
          type="Resume"
          href="/DeveloperResume.pdf"
          target="_blank"
        />

      </div>
    </section>
  );
}
