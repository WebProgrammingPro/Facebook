import { Card, CardContent } from "./ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CardWrapper = ({ children, className }: CardWrapperProps) => {
  return (
    <Card className={className}>
      <CardContent className="p-3">{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
