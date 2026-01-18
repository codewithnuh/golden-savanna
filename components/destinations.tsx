import { Container } from "./container";
import { DestinationsGallery } from "./DestinationsGallery";

export const Destinations = () => {
  return (
    <section>
      <Container>
        <h2 className="font-bold text-muted text-xl">Destinations</h2>
        <p className="font-bold text-2xl sm:text-3xl md:text-5xl text-primary-foreground">
          Explore Our Safari Destinations Across Africa
        </p>
      </Container>
      <DestinationsGallery />
    </section>
  );
};
