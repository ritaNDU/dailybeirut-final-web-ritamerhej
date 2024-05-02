import { useNavigate, useParams } from "react-router-dom";
import useManageAllPosts from "../../hooks/useManageAllPosts";
import { getPostById } from "../../utils/postsUtils";
import NavigationButton from "../../components/atoms/Buttons/NavigationButton";
import Post from "../../data/post.type";
import NewsDetails from "../../components/molecules/NewsDetails";
import NavBar from "../../components/molecules/NavBar";
import PostNotFoundError from "../../components/molecules/PostNotFoundError";

function PostDetails() {
  const { allPosts } = useManageAllPosts();
  const navigate = useNavigate();

  const id = useParams();
  const postId = id.postId ?? "";
  const post: Post | undefined = getPostById(allPosts, postId);
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col gap-2">
      <NavBar />
      <div className="px-10 py-3 md:py-2 md:px-10">
        <NavigationButton
          name="Go back"
          onClick={goBack}
          className="place-self-start p-2 mb-4 md:mb-2"
        />
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
          <PostNotFoundError />
        )}
      </div>
    </div>
  );
}

export default PostDetails;
