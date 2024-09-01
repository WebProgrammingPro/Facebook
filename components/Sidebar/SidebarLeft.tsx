import Link from "next/link";

import { Bookmark } from "lucide-react";

import Sidebar from "./Sidebar";
import ImageAvatar from "../avatar/ImageAvatar";
import NameAvatar from "../avatar/NameAvatar";

import { currentUser } from "@/lib/auth";

const SidebarLeft = async () => {
  const user = await currentUser();

  return (
    <Sidebar>
      <div className="flex-grow">
        <div>
          <ul>
            <li>
              <div className="px-2">
                <Link href={`/profile/${user?.id}`}>
                  <div className="relative flex flex-row items-center justify-between px-2 z-0 rounded-lg hover:bg-gray-300/50">
                    <div className="relative flex flex-col mt-1 mr-3 mb-1">
                      <ImageAvatar className="w-8 h-8" user={user} />
                    </div>
                    <div className="flex-grow">
                      <NameAvatar user={user} />
                    </div>
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div className="px-2">
                <Link href={"/saved"}>
                  <div className="relative flex flex-row items-center justify-between px-2 z-0 rounded-lg hover:bg-gray-300/50">
                    <div className="relative flex flex-col mt-1 mr-3 mb-1">
                      <Bookmark className="w-8 h-8" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-sm">Saved</span>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarLeft;
