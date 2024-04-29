import { useNavigate } from "react-router-dom";
import PostImage from "../atoms/PostImage";

type Props = {
  title: string;
  imageUrl?: string;
  postId: string;
  language: string;
  className?: string;
  textSize: "text-large" | "text-normal";
};
const PostCard = ({
  title,
  imageUrl,
  postId,
  className,
  language,
  textSize,
}: Props) => {
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(`/news/${postId}`);
  };
  return (
    <div
      onClick={navigateToDetails}
      className={`flex flex-col gap-2 p-3 shadow-md mb-5 h-fit md:w-1/4 ${className}`}
      dir={language === "arabic" ? "rtl" : "ltr"}
    >
      <PostImage
        imageUrl={imageUrl}
        altText={title}
        className="w-full h-full md:w-full md:h-1/4"
      />
      <p className={` text-textColor ${textSize}`}>{title}</p>
    </div>
  );
};

export default PostCard;
