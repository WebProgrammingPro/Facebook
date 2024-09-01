interface TopNavbarProps {
  children: React.ReactNode;
}

const TopNavbar = ({ children }: TopNavbarProps) => {
  return (
    <div className="relative z-0">
      <div className="relative flex flex-col z-0">
        <div className="relative top-14 flex flex-col min-h-[calc(100vh-56px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
