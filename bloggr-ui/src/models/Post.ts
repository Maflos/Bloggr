import { Tag } from "./Tag";

export interface Post {
    id: string;
    title: string;
    authorId: string;
    description: string;
    content: string;
    createdAt: Date;
    tags: Tag[];
}