import LoadMoreButton from "../../components/atoms/Buttons/LoadMoreButton";
import NavBar from "../../components/molecules/NavBar";
import PostsList from "../../components/organisms/PostsList";
import useManagePostsFetching from "../../hooks/useManagePostsFetching";

function AllNews() {
  const { allPosts, endReached, isLoading, handleLoadMore } =
    useManagePostsFetching();

  console.log(allPosts);
  return (
    <div>
      <NavBar />
      <PostsList posts={allPosts} />
      <LoadMoreButton
        onClick={handleLoadMore}
        isLoading={isLoading}
        endReached={endReached}
      />
    </div>
  );
}

export default AllNews;
