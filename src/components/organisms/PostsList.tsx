import Post from "../../data/post.type";
import Spinner from "../atoms/Spinner";
import PostCard from "../molecules/PostCard";

type Props = {
  posts: Post[];
};
const PostsList = ({ posts }: Props) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
      {posts.length === 0 ? (
        <Spinner className="text-textColor" />
      ) : (
        posts.map((post) => {
          return (
            <li>
              <PostCard
                key={post._id}
                title={post.title}
                imageUrl={post.image_url}
                postId={post._id}
                language={post.language}
                textSize="text-normal"
              />
            </li>
          );
        })
      )}
    </ul>
  );
};

export default PostsList;
