"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputPostSchema, FormInputPostValues } from "@/schemas";

import { ExtendedUser } from "@/next-auth-d";
import { PostData } from "@/lib/types";
import { Audience } from "@prisma/client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import AudienceInputRow from "@/components/prefabs/forms/posts/AudienceInputRow";
import ContentTextareaRow from "@/components/prefabs/forms/posts/ContentTextareaRow";

interface FormPostProps {
  user?: ExtendedUser;
  onSubmit: SubmitHandler<FormInputPostValues>;
  isEditing: boolean;
  initialValue?: PostData;
}

const FormPost = ({
  user,
  onSubmit,
  isEditing,
  initialValue,
}: FormPostProps) => {
  const form = useForm<FormInputPostValues>({
    resolver: zodResolver(FormInputPostSchema),
    defaultValues: {
      id: initialValue?.id || undefined,
      audience: initialValue?.audience || Audience.Public || undefined,
      content: initialValue?.content || undefined,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <AudienceInputRow form={form} />
          </div>
          <div className="relative">
            <ContentTextareaRow form={form} user={user} />
          </div>
          <div className="flex items-center">
            <Button className="select-none">
              {!isEditing ? "Post" : "Update"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormPost;
