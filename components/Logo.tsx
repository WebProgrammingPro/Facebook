import Link from "next/link";

import { Facebook } from "lucide-react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 select-none">
        <Facebook />
        <span className="text-lg font-semibold">Facebook</span>
      </div>
    </Link>
  );
};

export default Logo;
