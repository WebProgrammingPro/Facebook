interface ButtonClickProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonClick = ({ children, onClick }: ButtonClickProps) => {
  return (
    <span className="flex-1" onClick={onClick}>
      {children}
    </span>
  );
};

export default ButtonClick;
