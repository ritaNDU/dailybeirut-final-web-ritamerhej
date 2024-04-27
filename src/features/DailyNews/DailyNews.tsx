import NavBar from "../../components/molecules/NavBar";
import PostsList from "../../components/organisms/PostsList";
import useManagePostsFetching from "../../hooks/useManagePostsFetching";

function DailyNews() {
  const { allPosts } = useManagePostsFetching();

  //Here I didn't use useMemo because I know that the posts are only 10
  const newsToday = allPosts.filter((post) => post.category.includes("top"));
  const top3Post = newsToday.slice(0, 3);
  return (
    <div>
      <NavBar />
      <h2>Hot Today</h2>
      <PostsList posts={top3Post} />
      <h2>What's Happening Today</h2>
      <PostsList posts={newsToday} />
    </div>
  );
}

export default DailyNews;
