import Hamburger from "./navViews/mobileNav/Hamburger";
import MobileNav from "./navViews/mobileNav/MobileNav";
import DesktopNav from "./navViews/DesktopNav";


export default function Navbar() {

  return (
    <div className="block top-0 w-full h-fit sm:h-24 bg-emerald-400 z-40">
      <Hamburger />
      <DesktopNav /> <MobileNav />
    </div>
  );
}
