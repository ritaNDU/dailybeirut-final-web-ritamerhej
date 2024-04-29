import placeholderImage from "../../assets/authenticationbackground.jpg";

type Props = {
  imageUrl?: string;
  altText?: string;
  className?: string;
};
const PostImage = ({ imageUrl, altText, className }: Props) => {
  return (
    <img
      className={className}
      src={imageUrl ?? placeholderImage}
      alt={`Image about ${altText}`}
    />
  );
};

export default PostImage;
