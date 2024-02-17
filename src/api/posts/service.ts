import { prisma } from "../../libs/prisma";

export async function findPosts() {
    const posts = await prisma.post.findMany();
    return posts;
}