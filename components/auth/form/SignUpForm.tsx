import { useState } from "react";

import { useSignUpMutation } from "@/hooks/auth/useSignUpMutation";

import { AuthCard } from "@/lib/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpValues } from "@/schemas";

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

const SignUpForm = ({ setState }: AuthCard) => {
  const { mutate: SignUpMutation, isPending } = useSignUpMutation();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<SignUpValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignUpValues) => {
    setError("");
    setSuccess("");

    SignUpMutation(values, {
      onSuccess: (data) => {
        if (data.error) {
          setError(data.error);
        }

        if (data.success) {
          setSuccess(data.success);
        }
      },
    });
  };

  return (
    <LayoutAuth
      headerLabel="Sign Up"
      headerDescription="Enter Your Information To Create An Account"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="flex flex-row space-x-2">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="First Name"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Last Name"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
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
                {isPending ? "Loading..." : "Sign Up"}
              </LoadingButton>
            </div>
          </div>
        </form>
      </Form>
      <Message error={error} success={success} />
      <CardFooter className="flex-col px-0 pb-0">
        <Separator />
        <p className="text-xs text-muted-foreground">
          Already Have An Account ?{" "}
          <Button
            className="p-0 text-sky-700"
            variant={"link"}
            size={"sm"}
            onClick={() => setState("SignIn")}
          >
            Sign In
          </Button>
        </p>
      </CardFooter>
    </LayoutAuth>
  );
};

export default SignUpForm;
