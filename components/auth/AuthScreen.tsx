"use client";

import { useState } from "react";

import { AuthFlow } from "@/lib/types";

import SignInForm from "./form/SignInForm";
import SignUpForm from "./form/SignUpForm";

const AuthScreen = () => {
  const [state, setState] = useState<AuthFlow>("SignIn");

  return (
    <>
      {state === "SignIn" ? (
        <SignInForm setState={setState} />
      ) : (
        <SignUpForm setState={setState} />
      )}
    </>
  );
};

export default AuthScreen;
