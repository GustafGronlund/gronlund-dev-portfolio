import Image from "next/image";
import { aboutPictures } from "@/lib/data";
import SectionTitleText from "../shared/section-title-text";
import useScrollReveal from "@/app/hooks/useScrollReveal";

function About() {
  const ScrollReveal = useScrollReveal;
  return (
    <main className="mt-40 flex w-full flex-col px-10 md:mt-60 md:max-w-screen-xl">
      <div className="mb-20 w-full">
        <SectionTitleText title="About" />
      </div>
      <section className="flex flex-col-reverse md:flex md:flex-row">
        <div className="flex h-fit flex-col md:justify-between">
          <div className="col-start-1 row-start-2 place-self-start md:row-start-1">
            <div className="mt-10 grid w-fit grid-cols-2 grid-rows-2 gap-5 md:mt-0">
              {aboutPictures.map((picture, index) => (
                <ScrollReveal
                  duration={1.5}
                  delay={0.5 + index * 0.1}
                  key={index}
                >
                  <Image
                    key={index}
                    src={picture}
                    alt="Pictures of Gustaf Grönlund in different settings."
                    className="h-[90px] w-[90px] object-cover md:h-[100px] md:w-[100px]"
                    loading="eager"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div className="col-start-2 row-start-2 mt-10 md:col-start-1 md:mt-40">
            <ScrollReveal
              delay={0.3}
              duration={1.25}
              initialY={10}
              animateY={0}
            >
              <p className="place-self-center font-tthoves text-base font-bold tracking-tight text-[#282828] dark:text-[#e9e9e9] md:col-start-2 md:w-[25ch]">
                Hi there! I{"'"}m a driven developer deeply passionate about
                design and user experience. With over 4 years of hands-on
                experience in web and mobile development, complemented by a
                recent degree in Front End Development, I specialize in creating
                high-quality applications that seamlessly blend functionality
                with visual appeal. Always eager for fresh challenges and
                opportunities to learn and grow, I am ready to contribute my
                skills to your projects. Let{"'"}s connect and discuss how we
                can bring your ideas to life!
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="w-full md:mt-auto md:pl-40">
          <ScrollReveal delay={0} duration={1.5} initialY={10} animateY={0}>
            <p className="col-start-1 row-start-1 w-full font-tthoves text-2xl font-medium tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:col-start-2 md:row-start-2 md:text-7xl">
              Passionate Developer Crafting Intuitive and User-Friendly Digital
              Experiences with a Love for Design.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default About;
