import { Container } from "./container";
import { FeatureCard } from "./feature-card";
import { SectionHeading } from "./section-heading";

export const WhyChooseUs = () => {
  return (
    <section className="mt-10 py-8 bg-white">
      <Container>
        <SectionHeading
          badge="Why choose us"
          title="Safario: Your Partner for Unforgettable Memories"
        />
        <div className="grid grid-cols-3 gap-4 mt-5">
          <FeatureCard
            iconSrc="/globe.svg"
            title="Safety & Expertise You Can Trust"
            description="Travel with confidence as our seasoned polar guides & top-tier safety protocols keep you secure."
          />
          <FeatureCard
            iconSrc="/globe.svg"
            title="Safety & Expertise You Can Trust"
            description="Travel with confidence as our seasoned polar guides & top-tier safety protocols keep you secure."
          />
          <FeatureCard
            iconSrc="/globe.svg"
            title="Safety & Expertise You Can Trust"
            description="Travel with confidence as our seasoned polar guides & top-tier safety protocols keep you secure."
          />
        </div>
      </Container>
    </section>
  );
};
