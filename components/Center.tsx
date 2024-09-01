interface CenterProps {
  children: React.ReactNode;
}

const Center = ({ children }: CenterProps) => {
  return (
    <div className="relative flex flex-nowrap flex-row justify-center items-stretch px-8 basis-[744px] flex-grow z-0">
      <div className="relative flex flex-col min-w-0 max-w-full flex-shrink-0 z-0">
        <div className="relative z-0">
          <div className="w-full mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Center;
