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
      <div className="p-10 w-full flex flex-col justify-center place-items-center gap-5">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <PostsList posts={allPosts} />
        </div>
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
