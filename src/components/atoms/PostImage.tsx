import placeholderImage from "../../assets/authenticationbackground.jpg";

type Props = {
  imageUrl?: string;
  altText?: string;
};
const PostImage = ({ imageUrl, altText }: Props) => {
  return (
    <>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Image about ${altText}`}
          style={{ width: 100, height: 100 }}
        />
      ) : (
        <img
          src={placeholderImage}
          alt={`Illustration about a newspaper`}
          style={{ width: 100, height: 100 }}
        />
      )}
    </>
  );
};

export default PostImage;
