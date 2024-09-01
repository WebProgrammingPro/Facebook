import { Separator } from "./ui/separator";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div>
      <div className="pb-4">{children}</div>
      <Separator />
    </div>
  );
};

export default Header;
