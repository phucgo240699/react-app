import { Post } from "models/posts";
import { getRequest } from "services";

export const getAllPosts = async (): Promise<Post[]> => {
  const response: any = await getRequest({ url: "/posts/getAll" });
  return response;
};
