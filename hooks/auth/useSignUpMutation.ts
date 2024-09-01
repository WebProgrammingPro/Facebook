import { useMutation } from "@tanstack/react-query";

import { SignUpValues } from "@/schemas";

import { SignUpAction } from "@/actions/auth/SignUpAction";

export function useSignUpMutation() {
  const mutation = useMutation({
    mutationFn: (values: SignUpValues) => SignUpAction(values),
  });

  return mutation;
}
