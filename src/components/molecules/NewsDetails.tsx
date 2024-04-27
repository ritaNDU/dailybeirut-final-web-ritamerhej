import { Link } from "react-router-dom";
import PostImage from "../atoms/PostImage";

type Props = {
  title: string;
  pubDate: string;
  image_url: string;
  description: string;
  link: string;
  source: string;
  language: string;
};
const NewsDetails = ({
  title,
  pubDate,
  image_url,
  description,
  link,
  source,
  language,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <PostImage imageUrl={image_url} altText={title} className="w-full" />
      <div
        className={`flex flex-col ${
          language === "arabic" ? "place-items-end" : "place-items-start"
        }`}
      >
        <p className="text-large font-bold text-textColor">{title}</p>
        <p className="text-small font-normal text-textColor">
          Published on: {pubDate}
        </p>
      </div>
      <p
        className={`text-textColor font-medium text-normal flex flex-col ${
          language === "arabic" ? "place-items-end" : "place-items-start"
        }`}
      >
        {description}
      </p>
      <div className="text-medium text-textColor">
        <p className="font-bold">Read full article at: </p>
        <Link to={link} target="_blank">
          {source}
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;
