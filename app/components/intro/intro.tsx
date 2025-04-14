import { useScrollReveal } from "@/app/hooks/";

const Intro = () => {
  const ScrollReveal = useScrollReveal;
  return (
    <section className="flex h-[83dvh] w-screen flex-col justify-between px-10 md:h-[85vh] md:max-w-screen-xl md:flex-row md:items-center md:justify-center">
      <section className="grid-row-4 grid h-full w-full grid-cols-2">
        <div className="flex flex-col">
          <ScrollReveal delay={0} duration={0.8}>
            <h1 className="text-left font-tthoves text-5xl tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
              GUSTAF
            </h1>
            <h1 className="text-left font-tthoves text-5xl tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
              GRÖNLUND
            </h1>
          </ScrollReveal>
        </div>
        <div className="col-start-1 row-start-2">
          <ScrollReveal delay={0.3} duration={0.8}>
            <p className="text-left font-tthoves text-xs font-bold uppercase text-[#282828] dark:text-[#e9e9e9] md:max-w-[25ch] md:text-sm">
              Frontend developer with a passion for creating intuitive,
              user-first web and mobile apps that seamlessly blend design and
              functionality to create meaningful digital experiences.
            </p>
          </ScrollReveal>
        </div>
        <div className="col-start-2 row-start-2 flex flex-col place-self-end">
          <ScrollReveal delay={0.6} duration={0.8}>
            <h1 className="place-self-end text-right font-tthoves text-5xl tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
              FRONTEND
            </h1>
            <h1 className="place-self-end text-right font-tthoves text-5xl tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
              DEVELOPER
            </h1>
          </ScrollReveal>
        </div>
      </section>
    </section>
  );
};

export default Intro;
