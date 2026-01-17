import { MenuIcon } from "lucide-react";
import { Container } from "./container";

export const NavBar = () => {
  return (
    <header>
      <Container className="border-b border-primary-foreground">
        <nav className="flex justify-between py-4 ">
          <span className="text-lg text-primary-foreground font-bold">
            GoldenSavanna
          </span>
          <MenuIcon size={25} />
        </nav>
      </Container>
    </header>
  );
};
