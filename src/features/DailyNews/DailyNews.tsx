import Spinner from "../../components/atoms/Spinner";
import NavBar from "../../components/molecules/NavBar";
import PostCard from "../../components/molecules/PostCard";
import PostsList from "../../components/organisms/PostsList";
import useManagePostsFetching from "../../hooks/useManagePostsFetching";

function DailyNews() {
  const { allPosts } = useManagePostsFetching();

  //Here I didn't use useMemo because I know that the posts are only 10
  const newsToday = allPosts.filter((post) => post.category.includes("top"));
  const topPost = newsToday[0];
  return (
    <div className="flex flex-col gap-3">
      <NavBar />
      <div className="p-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-large font-bold text-textColor">Hot Today</h2>
          {topPost ? (
            <PostCard
              postId={topPost._id}
              title={topPost.title}
              imageUrl={topPost.image_url}
              language={topPost.language}
              className="md:w-5/6 md:h-fit md:place-items-center md:place-self-center"
              textSize="text-large"
            />
          ) : (
            <Spinner className="text-textColor place-self-center" />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-large font-bold text-text">
            What's Happening Today
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap md:gap-1 md:justify-around">
            <PostsList posts={newsToday} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyNews;
