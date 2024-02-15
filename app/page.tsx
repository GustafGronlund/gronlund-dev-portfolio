import About from "./components/about/about";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header/header";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
