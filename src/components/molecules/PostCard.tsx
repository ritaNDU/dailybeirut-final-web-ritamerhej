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
      className={`flex flex-col gap-2 p-3 shadow-md mb-5 w-fit h-fit md:w-[300px] md:h-[200px] ${className}`}
      dir={language === "arabic" ? "rtl" : "ltr"}
    >
      <PostImage
        imageUrl={imageUrl}
        altText={title}
        className="w-full h-full"
      />
      <p className={` text-textColor ${textSize}`}>{title}</p>
    </div>
  );
};

export default PostCard;
