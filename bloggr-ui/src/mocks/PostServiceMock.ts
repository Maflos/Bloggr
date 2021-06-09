import { Post } from "../models/Post";
import { posts } from "./MockDb";

export function getPostsByAuthorId(authorId: string): Post[] {
    return posts.filter(p => p.authorId === authorId)
}

export function getAllPosts(): Post[] {
    return posts;
}