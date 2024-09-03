import TopNavbar from "../TopNavbar";
import SidebarLeft from "../Sidebar/SidebarLeft";
import SidebarRight from "../Sidebar/SidebarRight";
import Center from "../Center";
import MainPost from "../MainPost";
import CreatePost from "../posts/button/CreatePost";
import ForYouFeed from "../posts/ForYouFeed";

const MainDashboard = () => {
  return (
    <TopNavbar>
      <div className="relative flex flex-nowrap flex-row justify-between items-start min-w-0 basis-0 flex-shrink flex-grow z-0">
        <SidebarLeft />
        <Center>
          <MainPost>
            <CreatePost />
            <ForYouFeed />
          </MainPost>
        </Center>
        <SidebarRight />
      </div>
    </TopNavbar>
  );
};

export default MainDashboard;
