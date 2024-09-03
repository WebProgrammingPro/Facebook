import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

import TopNavbar from "../TopNavbar";
import ImageAvatar from "../avatar/ImageAvatar";
import NameAvatar from "../avatar/NameAvatar";

import Center from "../Center";
import MainPost from "../MainPost";

import { onlyUser } from "@/lib/auth";
import { getUserById } from "@/prisma/data/user";
import MainFriends from "./MainFriends";
import CreatePost from "../posts/button/CreatePost";
import ForYouFeed from "../posts/feeds/ForYouFeed";
import ManagerFriendRequestButton from "./ManagerFriendRequest/ManagerFriendRequestButton";

interface MainProfileProps {
  params: { userId: string };
}

const MainProfile = async ({ params }: MainProfileProps) => {
  const user = await getUserById(params.userId);
  const only = await onlyUser(params.userId);

  if (!user) return;

  return (
    <TopNavbar>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col w-full bg-background px-4 py-4 border-b shadow-sm">
          <div className="flex flex-row justify-between items-center flex-1">
            <div className="flex items-center gap-4">
              <ImageAvatar className="w-40 h-40" user={user} />
              <NameAvatar className="text-2xl font-semibold" user={user} />
            </div>
            <div className="ml-auto flex items-center gap-2">
              {only ? (
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
              ) : (
                <ManagerFriendRequestButton friendId={user.id} />
              )}
            </div>
          </div>
        </div>
        <div className="flex bg-background">
          <Tabs defaultValue="posts" className="w-full">
            <div className="px-4 py-4">
              <TabsList>
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="friends">Friends</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="posts" className="mt-0">
              <div className="flex flex-row justify-between bg-gray-200">
                <Center>
                  <MainPost>
                    {only && <CreatePost />}
                    <ForYouFeed />
                  </MainPost>
                </Center>
              </div>
            </TabsContent>
            <TabsContent value="friends" className="mt-0">
              <div className="flex flex-row justify-between bg-gray-200">
                <MainFriends userId={params.userId} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </TopNavbar>
  );
};

export default MainProfile;
