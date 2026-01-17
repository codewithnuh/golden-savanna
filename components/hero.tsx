import { Container } from "./container";
import { ImageGallery } from "./image-gallery";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col md:items-center md:justify-center mt-10 space-y-7">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl max-w-lg sm:max-w-xl md:max-w-4xl md:text-center text-primary-foreground text-left">
            Your Next Great Safari Awaits with GoldenSavanna
          </h1>
          <p className="text-left text-lg font-medium text-primary-foreground  md:text-center max-w-lg sm:max-w-xl md:max-w-4xl">
            Experience Africa&apos;s essence with wildlife & stunning landscapes
            like the Great Migration, and take a hot air balloon ride over the
            savanna.
          </p>
          <Button className="bg-secondary  rounded-2xl py-6 text-secondary-foreground font-bold max-w-60">
            Explore All Destinations
          </Button>
          <ImageGallery
            autoScroll={false}
            variant="tilted"
            images={[
              "/images/image1.avif",
              "/images/image2.avif",
              "/images/image3.avif",
              "/images/image4.avif",
              "/images/image5.avif",
              "/images/image6.avif",
            ]}
          />
        </div>
      </Container>
    </section>
  );
};
