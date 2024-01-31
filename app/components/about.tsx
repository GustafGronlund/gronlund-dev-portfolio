import React from "react";
import Image from "next/image";
import me from "@/public/me.jpeg";

function About() {
  return (
    <main className="mt-40 flex w-full flex-col px-10 md:mt-60 md:max-w-screen-xl">
      <p className="indent-10 font-grotesk text-3xl md:text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra
        rhoncus metus, finibus interdum felis egestas non. Ut ac augue sem.
        Aliquam a sodales sapien, ac accumsan lacus.
      </p>
      <article className=" flex flex-col md:max-w-screen-xl md:justify-end">
        <div className="mt-5 grid w-fit grid-cols-2 grid-rows-2 gap-5 pt-10">
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
        <div className="flex w-full items-center justify-center pt-20 md:grid md:grid-cols-3">
          <p className="col-start-2 place-self-center font-mono text-base md:w-[50ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            viverra rhoncus metus, finibus interdum felis egestas non. Ut ac
            augue sem. Aliquam a sodales sapien, ac accumsan lacus. Curabitur
            dapibus feugiat elementum. Nullam aliquet a dolor id consequat.
            Donec feugiat auctor nibh id mattis. Ut faucibus est ligula, id
            lobortis odio iaculis elementum. Donec vel posuere lectus. Vivamus
            urna nisl, tristique quis egestas non, ultricies eget turpis. Aenean
            quis augue feugiat, commodo sapien sit amet, tempus nisl. Nulla et
            magna augue. Proin placerat dapibus congue. Aenean quis erat
            bibendum, mollis nibh in, congue eros. Curabitur blandit eros at
            arcu feugiat porta. Maecenas ut ipsum libero. Maecenas viverra
            elementum fermentum.
          </p>
        </div>
      </article>
    </main>
  );
}

export default About;
