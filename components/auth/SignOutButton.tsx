"use client";

import { SignOutAction } from "@/actions/auth/SignOutAction";

interface SignOutButtonProps {
  children: React.ReactNode;
}

const SignOutButton = ({ children }: SignOutButtonProps) => {
  const onClick = () => {
    SignOutAction();
  };

  return <span onClick={onClick}>{children}</span>;
};

export default SignOutButton;
