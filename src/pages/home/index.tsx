import withAllPosts from "hocs/posts";
import PostsList from "components/PostsLists";

const HomePage = () => {
  const AllPostsList = withAllPosts(PostsList);
  return <AllPostsList />;
};

export default HomePage;
