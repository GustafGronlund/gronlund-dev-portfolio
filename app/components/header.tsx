import { TfiWorld } from "react-icons/tfi";
import DynamicClock from "./dynamic-clock";

function Header() {
  const date = new Date();
  return (
    <header className="h-15 sticky top-0 flex w-full flex-row justify-between bg-transparent px-10 py-5 md:max-w-screen-xl md:bg-transparent">
      <div className="flex flex-col gap-1">
        <p className="font-mono text-xs">GUSTAF GRÖNLUND</p>
        <div className="flex flex-row items-center">
          <p className="mr-1 font-mono text-xs">SWEDEN</p>
          <div className="flex flex-row items-center justify-center">
            <p>(</p>
            <DynamicClock />
            <p>)</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="h-6 w-6 rounded-full border border-[#e9e9e9] bg-[#282828]"></div>
      </div>
    </header>
  );
}

export default Header;
