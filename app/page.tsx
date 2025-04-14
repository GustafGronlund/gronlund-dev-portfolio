import { About, Intro, Projects, Footer, Header, Skills } from "./components";

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
