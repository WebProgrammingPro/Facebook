import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Header from "../Header";

interface CardWrapperAuthProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription: string;
}

const CardWrapperAuth = ({
  children,
  headerLabel,
  headerDescription,
}: CardWrapperAuthProps) => {
  return (
    <Card>
      <CardHeader className="pb-5">
        <Header>
          <CardTitle className="text-xl">{headerLabel}</CardTitle>
          <CardDescription>{headerDescription}</CardDescription>
        </Header>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapperAuth;
