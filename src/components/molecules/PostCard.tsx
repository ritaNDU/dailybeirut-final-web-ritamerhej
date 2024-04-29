import { useNavigate } from "react-router-dom";
import PostImage from "../atoms/PostImage";

type Props = {
  title: string;
  imageUrl?: string;
  postId: string;
  className?: string;
};
const PostCard = ({ title, imageUrl, postId, className }: Props) => {
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(`/news/${postId}`);
  };
  return (
    <div
      onClick={navigateToDetails}
      className={`flex flex-col gap-2 p-3 shadow-md mb-5 h-fit md:w-1/4 ${className}`}
    >
      <PostImage
        imageUrl={imageUrl}
        altText={title}
        className="w-full h-full md:w-full md:h-1/4"
      />
      <h3 className="text-large text-textColor">{title}</h3>
    </div>
  );
};

export default PostCard;
