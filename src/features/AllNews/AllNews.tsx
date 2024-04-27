import LoadMoreButton from "../../components/atoms/Buttons/LoadMoreButton";
import NavBar from "../../components/molecules/NavBar";
import PostsList from "../../components/organisms/PostsList";
import useManagePostsFetching from "../../hooks/useManagePostsFetching";

function AllNews() {
  const { allPosts, endReached, isLoading, handleLoadMore } =
    useManagePostsFetching();
  return (
    <>
      <NavBar />
      <div className="p-5">
        <PostsList posts={allPosts} />
        {allPosts.length > 0 && (
          <LoadMoreButton
            onClick={handleLoadMore}
            isLoading={isLoading}
            endReached={endReached}
          />
        )}
      </div>
    </>
  );
}

export default AllNews;
