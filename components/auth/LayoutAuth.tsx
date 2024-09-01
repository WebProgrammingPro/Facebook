import Header from "../Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CardWrapperAuth from "./CardWrapperAuth";
import ContainerAuth from "./ContainerAuth";

interface LayoutAuthProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription: string;
}

const LayoutAuth = ({
  children,
  headerLabel,
  headerDescription,
}: LayoutAuthProps) => {
  return (
    <ContainerAuth>
      <div className="w-[600px]">
        <CardWrapperAuth
          headerLabel={headerLabel}
          headerDescription={headerDescription}
        >
          <div className="space-y-4">{children}</div>
        </CardWrapperAuth>
      </div>
    </ContainerAuth>
  );
};

export default LayoutAuth;
