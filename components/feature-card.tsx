import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const FeatureCard = ({
  iconSrc,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <Card className="shadow-black/10 bg-background shadow-sm rounded-xl p-6">
      <CardHeader className="flex flex-start p-0 mb-4">
        <Image src={iconSrc} alt={title} width={50} height={50} />
      </CardHeader>
      <CardContent className="p-0">
        <h3 className="text-primary-foreground font-bold text-xl mb-2">
          {title}
        </h3>
        <p className="text-primary-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
