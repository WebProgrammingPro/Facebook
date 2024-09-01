interface ContainerAuthProps {
  children: React.ReactNode;
}

const ContainerAuth = ({ children }: ContainerAuthProps) => {
  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      <div className="relative scale-95">{children}</div>
    </div>
  );
};

export default ContainerAuth;
