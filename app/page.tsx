import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
    </>
  );
}
