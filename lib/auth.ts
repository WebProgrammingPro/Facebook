import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const onlyUser = async (id: string) => {
  const userCurrent = await currentUser();

  return userCurrent?.id === id;
};
