import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { DropdownMenu, DropdownMenuItem } from "./ui/dropdown-menu";

interface ConfirmationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  label: string;
  button: string;
  onClick: () => void;
}

const ConfirmationCard = ({
  title,
  description,
  icon,
  label,
  button,
  onClick,
}: ConfirmationCardProps) => {
  return (
    <AlertDialog>
      <DropdownMenu>
        <AlertDialogTrigger asChild>
          <DropdownMenuItem className="cursor-pointer">
            {icon}
            <span>{label}</span>
          </DropdownMenuItem>
        </AlertDialogTrigger>
      </DropdownMenu>
      <AlertDialogContent className="max-w-[600px]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="select-none">Cancel</AlertDialogCancel>
          <AlertDialogAction className="select-none" onClick={onClick}>
            {button}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationCard;
