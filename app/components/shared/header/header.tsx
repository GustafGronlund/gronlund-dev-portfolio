import { LinkAnimation } from "../link-animation";
import { ClockComponent, ToggleTheme } from "./components";
import { useScrollReveal } from "@/app/hooks/";
import { headerNavLinks } from "@/lib/data";

export const Header = () => {
  const ScrollReveal = useScrollReveal;
  return (
    <header className="h-15 sticky top-0 !z-[999] flex w-full flex-row justify-between bg-transparent px-10 py-5 mix-blend-difference dark:mix-blend-difference md:max-w-screen-xl">
      <div className="flex flex-col gap-1">
        <ScrollReveal delay={1} duration={0.5}>
          <p className="font-mono text-xs text-[#e9e9e9]">GUSTAF GRÖNLUND</p>
          <div className="flex flex-row items-center">
            <p className="mr-1 font-mono text-xs text-[#e9e9e9]">SWEDEN</p>
            <div className="flex flex-row items-center justify-center text-[#e9e9e9]">
              <p>(</p>
              <ClockComponent />
              <p>)</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="flex flex-row gap-5">
        <ScrollReveal
          delay={1}
          duration={0.5}
          className="flex flex-row items-center gap-10"
        >
          <ul className="hidden flex-row items-center justify-between gap-10 md:flex">
            {headerNavLinks.map((link, i) => (
              <LinkAnimation key={i} title={link.title} href={link.href} />
            ))}
          </ul>

          <ToggleTheme />
        </ScrollReveal>
      </div>
    </header>
  );
};
