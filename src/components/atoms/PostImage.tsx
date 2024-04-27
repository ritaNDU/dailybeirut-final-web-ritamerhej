import placeholderImage from "../../assets/authenticationbackground.jpg";

type Props = {
  imageUrl?: string;
  altText?: string;
  className?: string;
};
const PostImage = ({ imageUrl, altText, className }: Props) => {
  return (
    <div>
      {imageUrl ? (
        <img
          className={className}
          src={imageUrl}
          alt={`Image about ${altText}`}
        />
      ) : (
        <img
          className={className}
          src={placeholderImage}
          alt={`Illustration about a newspaper`}
        />
      )}
    </div>
  );
};

export default PostImage;
