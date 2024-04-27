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
    <div onClick={navigateToDetails} style={{ border: "1px solid black" }}>
      <PostImage imageUrl={imageUrl} altText={title} />
      <p>{title}</p>
    </div>
  );
};

export default PostCard;
