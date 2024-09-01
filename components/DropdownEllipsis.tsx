import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

import { Ellipsis } from "lucide-react";

interface DropdownEllipsis {
  children: React.ReactNode;
}

const DropdownEllipsis = ({ children }: DropdownEllipsis) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center w-9 h-9 py-2 px-2 rounded-full cursor-pointer hover:bg-gray-200">
          <Ellipsis />
        </div>
      </DropdownMenuTrigger>
      {children}
    </DropdownMenu>
  );
};

export default DropdownEllipsis;
