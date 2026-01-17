import { cn } from "@/lib/utils";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn(className, "container px-8 mx-auto ")}>{children}</div>
  );
};
