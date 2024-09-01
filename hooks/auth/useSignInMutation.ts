import { useMutation } from "@tanstack/react-query";

import { SignInValues } from "@/schemas";

import { SignInAction } from "@/actions/auth/SignInAction";

export function useSignInMutation() {
  const mutation = useMutation({
    mutationFn: (values: SignInValues) => SignInAction(values),
  });

  return mutation;
}
