import { Post } from "models/posts";
import { useEffect, useState } from "react";
import { getAllPosts } from "services/posts";

interface WrappedComponentProps {
  posts: Post[];
}

const withAllPosts = (WrappedComponent: React.FC<WrappedComponentProps>) => {
  const WrappedComponentWithAllPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      async function handleGettingAllPosts() {
        setPosts(await getAllPosts());
      }
      handleGettingAllPosts();
    }, []);
    return <WrappedComponent posts={posts} />;
  };
  return WrappedComponentWithAllPosts;
};

export default withAllPosts;
