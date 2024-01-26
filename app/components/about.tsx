import React from "react";

function About() {
  return (
    <main className="w-full flex flex-end justify-end px-10 md:max-w-screen-xl py-10">
      <article className=" flex flex-col md:max-w-screen-xl md:justify-end">
        <h1 className="mb-10 text-lg font-grotesk text-[#282828]">
          01.<span className="text-2xl text-gray-500"> ABOUT</span>
        </h1>
        <div className="w-fit md:flex md:flex-col md:justify-end md:items-end">
          <p className="font-mono text-base md:w-[50ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            blandit lorem a ligula rhoncus iaculis ut luctus justo. Sed interdum
            condimentum urna, vel vestibulum mauris sollicitudin quis. Mauris
            dapibus, mauris ac pulvinar malesuada, metus nisi maximus eros, id
            imperdiet turpis nulla nec massa. Praesent mattis porta ultricies.
            Nullam vel mollis metus. Pellentesque tempor nisl quam, ac sagittis
            sapien rutrum sit amet. Proin vitae magna ligula.
          </p>
        </div>
      </article>
    </main>
  );
}

export default About;