import About from "./components/about";
import Header from "./components/header";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
