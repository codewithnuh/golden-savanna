import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export const ImageCard = ({ src }: { src: string }) => {
  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="p-0">
        <Image
          src={src}
          alt="Sunset in the mountains"
          width={500}
          height={500}
          className="aspect-4/5 w-full object-cover rounded-lg"
          loading="lazy"
        />
      </CardContent>
    </Card>
  );
};
