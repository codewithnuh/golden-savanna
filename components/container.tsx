import { cn } from "@/lib/utils";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn(className, "container px-2 md:px-6 mx-auto ")}>
      {children}
    </div>
  );
};
