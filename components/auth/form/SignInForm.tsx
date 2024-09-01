import { useState } from "react";

import { useSignInMutation } from "@/hooks/auth/useSignInMutation";

import { AuthCard } from "@/lib/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInValues } from "@/schemas";

import { CardFooter } from "../../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../../ui/button";
import { Separator } from "@/components/ui/separator";

import LayoutAuth from "../LayoutAuth";
import LoadingButton from "@/components/LoadingButton";
import Message from "@/components/Message";

const SignInForm = ({ setState }: AuthCard) => {
  const { mutate: SignInMutation, isPending } = useSignInMutation();

  const [error, setError] = useState<string | undefined>("");

  const form = useForm<SignInValues>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInValues) => {
    setError("");

    SignInMutation(values, {
      onSuccess: (data) => {
        if (data?.error) {
          setError(data.error);
        }
      },
    });
  };

  return (
    <LayoutAuth
      headerLabel="Sign In"
      headerDescription="Enter Your Email Below To Sign In To Your Account"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div className="relative flex-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="relative flex-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="relative flex justify-center flex-1 select-none">
              <LoadingButton
                loading={isPending}
                type="submit"
                className="w-full"
              >
                {isPending ? "Loading..." : "Sign In"}
              </LoadingButton>
            </div>
          </div>
        </form>
      </Form>
      <Message error={error} />
      <CardFooter className="flex-col px-0 pb-0">
        <Separator />
        <p className="text-xs text-muted-foreground">
          Don&apos;t Have An Account ?{" "}
          <Button
            className="p-0 text-sky-700"
            variant={"link"}
            size={"sm"}
            onClick={() => setState("SignUp")}
          >
            Sign Up
          </Button>
        </p>
      </CardFooter>
    </LayoutAuth>
  );
};

export default SignInForm;
