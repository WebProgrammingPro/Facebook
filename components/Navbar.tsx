import Link from "next/link";

import { House } from "lucide-react";

import Container from "./Container";
import Logo from "./Logo";
import UserButton from "./auth/UserButton";

const navigation = [{ name: "Home", href: "/", icon: <House /> }];

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bg-background border-b z-50">
      <Container>
        <div className="flex justify-between items-center w-full h-14">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex gap-2 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-5 py-2 transition-colors hover:bg-gray-100 hover:text-accent-foreground focus:text-accent-foreground"
              >
                {item.icon}
              </Link>
            ))}
          </div>
          <div className="flex gap-2">
            <UserButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
