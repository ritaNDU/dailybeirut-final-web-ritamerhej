import { useNavigate, useParams } from "react-router-dom";
import useManageAllPosts from "../../hooks/useManageAllPosts";
import { getPostById } from "../../utils/postsUtils";
import NavigationButton from "../../components/atoms/Buttons/NavigationButton";
import Post from "../../data/post.type";
import NewsDetails from "../../components/molecules/NewsDetails";

function PostDetails() {
  const { allPosts } = useManageAllPosts();
  const navigate = useNavigate();

  const id = useParams();
  const postId = id.postId ?? "";
  const post: Post | undefined = getPostById(allPosts, postId);
  const goBack = () => {
    navigate(-1);
  };
  console.log(post);
  return (
    <div className="flex flex-col gap-3 p-5">
      {post ? (
        <NewsDetails
          title={post.title}
          pubDate={post.pubDate}
          image_url={post.image_url}
          description={post.description}
          link={post.link}
          source={post.source_url}
          language={post.language}
        />
      ) : (
        <>
          <h2 className="text-large font-bold place-self-center">
            Post Not Found
          </h2>
          <p className="text-normal">
            You have either followed the wrong link, or have internet connection
            problems.
          </p>
        </>
      )}
      <NavigationButton name="Go back" onClick={goBack} className="w-full" />
    </div>
  );
}

export default PostDetails;
