import { About } from "@/components/about";
import { Destinations } from "@/components/destinations";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/nav-bar";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Destinations />
      <WhyChooseUs />
    </>
  );
}
