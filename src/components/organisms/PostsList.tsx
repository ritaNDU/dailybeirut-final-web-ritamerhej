import Post from "../../data/post.type";
import Spinner from "../atoms/Spinner";
import PostCard from "../molecules/PostCard";

type Props = {
  posts: Post[];
};
const PostsList = ({ posts }: Props) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
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
    </div>
  );
};

export default PostsList;
