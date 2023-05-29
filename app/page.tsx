import Contact from "./components/contact/Contact";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import ProjectCollection from "./components/projects/ProjectCollection";


export default function Home() {


  return (
    <div className="w-full h-full bg-gray-800 text-white font-mono">
      <Navbar />
      <main>
        <Landing />
        <ProjectCollection />
        <Contact />
      </main>
    </div>
  );
}
