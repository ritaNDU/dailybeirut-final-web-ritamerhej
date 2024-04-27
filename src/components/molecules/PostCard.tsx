import { useNavigate } from "react-router-dom";
import placeholderImage from "../../assets/authenticationbackground.jpg";

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
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`image about ${title}`}
          style={{ width: 100, height: 100 }}
        />
      ) : (
        <img
          src={placeholderImage}
          alt={`Illustration about a newspaper`}
          style={{ width: 100, height: 100 }}
        />
      )}
      <p>{title}</p>
    </div>
  );
};

export default PostCard;
