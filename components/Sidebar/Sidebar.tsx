interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="sticky top-14 min-w-[280px] max-w-[360px] h-full basis-[360px] overflow-hidden flex-shrink-[9999] z-0">
      <div className="relative flex flex-col h-full z-0">
        <div className="relative flex flex-col flex-shrink flex-grow basis-full overflow-x-hidden overflow-y-auto z-0">
          <div className="relative flex flex-col flex-grow">
            <div className="relative flex flex-col flex-grow mt-4">
              <div className="flex flex-col min-h-full flex-grow">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
