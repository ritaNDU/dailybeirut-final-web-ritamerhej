import NavBar from "../../components/molecules/NavBar";
import useManagePostsFetching from "../../hooks/useManagePostsFetching";

function AllNews() {
  const { allPosts } = useManagePostsFetching();
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default AllNews;
