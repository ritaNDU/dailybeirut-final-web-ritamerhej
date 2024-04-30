import { useEffect, useState } from "react";
import useManageAllPosts from "./useManageAllPosts";
import useAxiosPostsInstance from "./useAxiosPostsInstance";
import Post from "../data/post.type";

const useManagePostsFetching = () => {
  const { allPosts, addPosts, storePosts } = useManageAllPosts();
  const [page, setPage] = useState(1);
  const [endReached, setEndReached] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getPostsFromApi } = useAxiosPostsInstance();

  const setPosts = (postsData: Post[]) => {
    const posts: Post[] = [];
    for (const key in postsData) {
      const post: Post = {
        _id: postsData[key]._id,
        title: postsData[key].title,
        description: postsData[key].description,
        pubDate: postsData[key].pubDate,
        image_url: postsData[key].image_url,
        source_url: postsData[key].source_url,
        language: postsData[key].language,
        link: postsData[key].link,
        category: postsData[key].category,
      };
      posts.push(post);
    }
    return posts;
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    if (!endReached) {
      const data = await getPostsFromApi(JSON.stringify(page));
      const postsData: Post[] = data.results;
      const paginationData = data.pagination;

      if (page > paginationData.totalPages) {
        setIsLoading(false);
        setEndReached(true);
        return;
      }

      const posts: Post[] = setPosts(postsData);

      addPosts(posts);

      setPage((prev) => prev + 1);
    }

    setIsLoading(false);
  };

  async function handleInitialFetch() {
    setIsLoading(true);
    storePosts([]);
    const data = await getPostsFromApi("1");
    const postsData = data.results;

    const posts: Post[] = setPosts(postsData);

    storePosts(posts);
    setPage(2);
    setEndReached(false);
    setIsLoading(false);
  }

  useEffect(() => {
    handleInitialFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    allPosts,
    endReached,
    isLoading,
    handleLoadMore,
  };
};

export default useManagePostsFetching;
