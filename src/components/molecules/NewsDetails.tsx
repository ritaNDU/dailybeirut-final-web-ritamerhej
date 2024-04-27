import { Link } from "react-router-dom";
import PostImage from "../atoms/PostImage";

type Props = {
  title: string;
  pubDate: string;
  image_url: string;
  description: string;
  link: string;
  source: string;
};
const NewsDetails = ({
  title,
  pubDate,
  image_url,
  description,
  link,
  source,
}: Props) => {
  return (
    <div>
      <PostImage imageUrl={image_url} altText={title} />
      <div>
        <p>{title}</p>
        <p>Published on: {pubDate}</p>
      </div>
      <p>{description}</p>
      <div>
        <p>Read full article at: </p>
        <Link to={link} target="_blank">
          {source}
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;
