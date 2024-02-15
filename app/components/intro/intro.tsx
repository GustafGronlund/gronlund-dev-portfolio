const Intro = () => {
  return (
    <section className="flex h-[83dvh] w-screen flex-col justify-between px-10 md:h-[85vh] md:max-w-screen-xl md:flex-row md:items-center md:justify-center">
      <section className="grid-row-4 grid h-full w-full grid-cols-2">
        <div className="flex flex-col">
          <h1 className="text-left font-tthoves text-5xl tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
            GUSTAF
          </h1>
          <h1 className="text-left font-tthoves text-5xl tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
            GRÖNLUND
          </h1>
        </div>
        <p className="col-start-1 row-start-2 text-left font-tthoves text-base font-bold text-[#282828] dark:text-[#e9e9e9] md:max-w-[25ch] md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          et nisl ac velit accumsan elementum eu vitae neque.
        </p>
        <div className="col-start-2 row-start-2 flex flex-col place-self-end">
          <h1 className="place-self-end text-right font-tthoves text-5xl tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
            FRONTEND
          </h1>
          <h1 className="place-self-end text-right font-tthoves text-5xl tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
            DEVELOPER
          </h1>
        </div>
      </section>
    </section>
  );
};

export default Intro;
