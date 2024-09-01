interface MainPostProps {
  children: React.ReactNode;
}

const MainPost = ({ children }: MainPostProps) => {
  return (
    <div className="flex flex-row justify-center w-[550px]">
      <div className="w-[680px] max-w-full">{children}</div>
    </div>
  );
};

export default MainPost;
