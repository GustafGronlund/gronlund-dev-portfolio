import DynamicClock from "./components/dynamic-clock";
import ToggleTheme from "./components/toggle-theme";

function Header() {
  const date = new Date();
  return (
    <header className="h-15 sticky top-0 !z-[999] flex w-full flex-row justify-between bg-transparent px-10 py-5 md:max-w-screen-xl md:bg-transparent">
      <div className="flex flex-col gap-1">
        <p className="font-mono text-xs text-[#282828] mix-blend-difference dark:text-[#e9e9e9]">
          GUSTAF GRÖNLUND
        </p>
        <div className="flex flex-row items-center">
          <p className="mr-1 font-mono text-xs text-[#282828] dark:text-[#e9e9e9]">
            SWEDEN
          </p>
          <div className="flex flex-row items-center justify-center text-[#282828] dark:text-[#e9e9e9]">
            <p>(</p>
            <DynamicClock />
            <p>)</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <ToggleTheme />
      </div>
    </header>
  );
}

export default Header;
