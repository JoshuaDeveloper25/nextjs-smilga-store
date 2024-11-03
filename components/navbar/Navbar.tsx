import Container from "../global/Container";
import NavSearch from "./NavSearch";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import CartButton from "./CartButton";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        <Logo />

        <Suspense>
          <NavSearch />
        </Suspense>

        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;