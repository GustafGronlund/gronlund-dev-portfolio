import React from "react";
import Image from "next/image";
import me from "@/public/me.jpeg";

function About() {
  return (
    <main className="mt-40 flex w-full flex-col px-10 md:mt-60 md:max-w-screen-xl">
      <div className="mb-20 w-full">
        <h1 className="font-tthoves text-5xl font-bold tracking-tighter text-[#282828] md:text-9xl">
          About
        </h1>
      </div>
      <section className="flex flex-col-reverse md:flex md:flex-row">
        <div className="flex h-fit flex-col md:justify-between">
          <div className="col-start-1 row-start-2 place-self-start md:row-start-1">
            <div className="mt-10 grid w-fit grid-cols-2 grid-rows-2 gap-5 md:mt-0">
              <Image
                src={me}
                alt="hej"
                className="h-[90px] w-[90px] object-cover md:h-[100px] md:w-[100px]"
              />
              <Image
                src={me}
                alt="hej"
                className="h-[90px] w-[90px] object-cover md:h-[100px] md:w-[100px]"
              />
              <Image
                src={me}
                alt="hej"
                className="h-[90px] w-[90px] object-cover md:h-[100px] md:w-[100px]"
              />
            </div>
          </div>
          <div className="col-start-2 row-start-2 mt-10 md:col-start-1 md:mt-40">
            <p className="font-tthoves place-self-center text-base font-bold tracking-tight text-[#282828] md:col-start-2 md:w-[25ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              viverra rhoncus metus, finibus interdum felis egestas non. Ut ac
              augue sem. Aliquam a sodales sapien, ac accumsan lacus. Curabitur
              dapibus feugiat elementum. Nullam aliquet a dolor id consequat.
              Donec feugiat auctor nibh id mattis. Ut faucibus est ligula, id
              lobortis odio iaculis elementum.
            </p>
          </div>
        </div>
        <div className="w-full md:mt-auto md:pl-40">
          <p className="font-tthovescol-start-1 row-start-1 w-full text-2xl font-medium tracking-tighter text-[#282828] md:col-start-2 md:row-start-2 md:text-7xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            viverra rhoncus metus, finibus interdum felis egestas non.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
