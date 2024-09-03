"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { ExtendedUser } from "@/next-auth-d";
import { FormInputCommentValues } from "@/schemas";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { SendHorizonal } from "lucide-react";
import { getFullName } from "@/lib/utils";

interface FormCommentProps {
  user?: ExtendedUser;
  onSubmit: SubmitHandler<FormInputCommentValues>;
  isEditing: boolean;
  form: any;
}

const FormComment = ({ user, onSubmit, isEditing, form }: FormCommentProps) => {
  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-1 flex-1">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    placeholder={`Comment as ${getFullName(user)}`}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" variant="ghost" size="icon">
            <SendHorizonal />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormComment;
