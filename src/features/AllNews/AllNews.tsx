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
      <div className="p-10 flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-10">
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
