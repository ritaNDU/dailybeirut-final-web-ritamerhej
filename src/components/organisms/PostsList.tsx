import Post from "../../data/post.type";
import Spinner from "../atoms/Spinner";
import PostCard from "../molecules/PostCard";

type Props = {
  posts: Post[];
};
const PostsList = ({ posts }: Props) => {
  return (
    <>
      {posts.length === 0 ? (
        <Spinner className="text-textColor" />
      ) : (
        posts.map((post) => {
          return (
            <PostCard
              key={post._id}
              title={post.title}
              imageUrl={post.image_url}
              postId={post._id}
              language={post.language}
              textSize="text-normal"
            />
          );
        })
      )}
    </>
  );
};

export default PostsList;
