import { Container } from "./container";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <section className="mt-20 py-8">
      <Container className="space-y-5 flex flex-col md:items-center">
        <h2 className="font-bold text-muted text-xl">About GoldenSavanna</h2>
        <p className="font-bold text-2xl sm:text-3xl md:text-5xl text-primary-foreground">
          Africa’s Safari Experts
        </p>
        <p className="text-primary-foreground text-left md:text-center max-w-lg sm:max-w-xl md:max-w-4xl ">
          Welcome to Safario Since 1998 we have been planning trips the length
          and breadth of the continent. The secret to our success? Our
          commitment to first-hand knowledge of every destination, lodge and
          activity we recommend.
        </p>
        <p className="text-primary-foreground text-left md:text-center max-w-lg sm:max-w-xl md:max-w-4xl ">
          We won’t show you the world; we’ll show you Africa, better than anyone
          else.
        </p>
        <div className="flex space-x-5 ">
          <Button className="bg-secondary  rounded-2xl py-6 text-secondary-foreground font-bold max-w-60">
            Explore All Destinations
          </Button>
          <Button className="bg-green-400 rounded-2xl py-6 text-secondary-foreground font-bold max-w-60">
            Explore All Destinations
          </Button>
        </div>
      </Container>
    </section>
  );
};
