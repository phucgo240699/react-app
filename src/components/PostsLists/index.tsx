import { Post } from "models/posts";
import React from "react";

interface Props {
  posts: Post[];
}

const PostsList: React.FC<Props> = ({ posts = [] }) => {
  return (
    <React.Fragment>
      {posts.map((post) => (
        <div style={{ marginTop: 10 }}>
          <img src={post.thumbnailUrl} />
          <h2>{post.title}</h2>
        </div>
      ))}
    </React.Fragment>
  );
};

export default PostsList;
