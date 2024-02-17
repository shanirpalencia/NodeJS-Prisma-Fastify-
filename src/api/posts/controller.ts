import { findPosts } from "./service";

export async function getPostsHandler() {
    const posts = await findPosts();
    return posts;
}