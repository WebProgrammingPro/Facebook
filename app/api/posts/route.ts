import { FormInputPostSchema } from "@/schemas";

import { currentUser } from "@/lib/auth";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userCurrent = await currentUser();

    const validatedFields = FormInputPostSchema.safeParse(body);
    if (!validatedFields.success)
      return Response.json({ error: "Invalid Fields" }, { status: 500 });

    const { audience, content } = validatedFields.data;

    const newPost = await db.post.create({
      data: { audience, content, user: { connect: { id: userCurrent?.id } } },
    });

    return Response.json(
      { success: "Created Post Successfully", post: newPost },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Could Not Create Post" }, { status: 500 });
  }
}
