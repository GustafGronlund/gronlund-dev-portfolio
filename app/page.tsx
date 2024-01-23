import Header from "./components/header";
import Intro from "./components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="">
        <Intro />
      </div>
    </main>
  );
}
