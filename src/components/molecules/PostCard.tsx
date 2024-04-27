import { useNavigate } from "react-router-dom";
import PostImage from "../atoms/PostImage";

type Props = {
  title: string;
  imageUrl?: string;
  postId: string;
};
const PostCard = ({ title, imageUrl, postId }: Props) => {
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(`/news/${postId}`);
  };
  return (
    <div
      onClick={navigateToDetails}
      className="flex flex-col gap-2 p-3 shadow-md mb-5"
    >
      <PostImage imageUrl={imageUrl} altText={title} className="w-full" />
      <p>{title}</p>
    </div>
  );
};

export default PostCard;
