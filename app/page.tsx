import Header from "./components/header";
import Intro from "./components/intro";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Header />
      <Intro />
      <Projects />
    </main>
  );
}
