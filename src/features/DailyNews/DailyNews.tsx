import NavBar from "../../components/molecules/NavBar";
import PostsList from "../../components/organisms/PostsList";
import useManagePostsFetching from "../../hooks/useManagePostsFetching";

function DailyNews() {
  const { allPosts } = useManagePostsFetching();

  //Here I didn't use useMemo because I know that the posts are only 10
  const newsToday = allPosts.filter((post) => post.category.includes("top"));
  const topPost = newsToday.slice(0, 1);
  return (
    <div className="flex flex-col gap-3">
      <NavBar />
      <div className="p-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-large font-bold text-text">Hot Today</h2>
          <PostsList posts={topPost} />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-large font-bold text-text">
            What's Happening Today
          </h2>
          <PostsList posts={newsToday} />
        </div>
      </div>
    </div>
  );
}

export default DailyNews;
