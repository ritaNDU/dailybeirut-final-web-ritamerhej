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
    <div
      className="flex flex-col gap-3 overflow-hidden"
      dir={language === "arabic" ? "rtl" : "ltr"}
    >
      <PostImage
        imageUrl={image_url}
        altText={title}
        className="w-fit h-fit place-self-center md:w-full md:h-80"
      />
      <div className="flex flex-col">
        <p className="text-large md:text-extraLarge font-bold text-textColor">
          {title}
        </p>
        <p className="text-medium md:text-normal font-light text-textColor">
          Published on: {pubDate}
        </p>
      </div>
      <p className="text-textColor font-medium text-normal flex flex-col">
        {description}
      </p>
      <div className="text-normal text-textColor mb-3" dir="ltr">
        <p className="font-bold text-normal">Read full article at: </p>
        <Link to={link} target="_blank">
          {source}
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;
