"use client";

import { useState } from "react";
import Link from "next/link";

import { useCreatePostMutation } from "@/hooks/posts/useCreatePostMutation";

import { FormInputPostValues } from "@/schemas";
import { capitalizeWords } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CardWrapper from "@/components/CardWrapper";
import ImageAvatar from "@/components/avatar/ImageAvatar";
import Header from "@/components/Header";
import FormPost from "../form/FormPost";

import { useCurrentUser } from "@/hooks/use-current-user";

const CreatePost = () => {
  const userCurrent = useCurrentUser();
  const { mutate: mutation } = useCreatePostMutation();

  const [open, setOpen] = useState(false);

  const handleCreatePost = (values: FormInputPostValues) => {
    mutation(values, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <div className="mb-4">
      <CardWrapper>
        <div className="flex">
          <div className="flex gap-2 flex-1">
            <div className="relative inline-block align-bottom z-0">
              <Link href={`/profile/${userCurrent?.id}`}>
                <ImageAvatar user={userCurrent} />
              </Link>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <div className="relative flex items-center bg-gray-200 rounded-full cursor-pointer flex-grow py-2 px-3 m-0">
                  <div className="text-gray-600 select-none">
                    <span>
                      What&apos;s On Your Mind,{" "}
                      {capitalizeWords(userCurrent?.first_name)} ?
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <Header>
                    <DialogTitle>New Post</DialogTitle>
                    <DialogDescription>
                      Share The Post And Enjoy Your Posts With Friends.
                    </DialogDescription>
                  </Header>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  <FormPost
                    user={userCurrent}
                    onSubmit={handleCreatePost}
                    isEditing={false}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default CreatePost;
