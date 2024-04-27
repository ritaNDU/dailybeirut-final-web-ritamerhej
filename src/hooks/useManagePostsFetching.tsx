import { useEffect, useState } from "react";
import useManageAllPosts from "./useManageAllPosts";
import useAxiosPostsInstance from "./useAxiosPostsInstance";
import Post from "../data/post.type";

const useManagePostsFetching = () => {
  const { allPosts, addPosts, storePosts } = useManageAllPosts();
  const [page, setPage] = useState(1);
  const [endReached, setEndReached] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { getPostsFromApi } = useAxiosPostsInstance();

  const setPosts = (postsData: Post[]) => {
    const posts: Post[] = [];
    for (const key in postsData) {
      const post: Post = {
        _id: postsData[key]._id,
        title: postsData[key].title,
        description: postsData[key].description,
        country: postsData[key].country,
        creator: postsData[key].creator,
        pubDate: postsData[key].pubDate,
        image_url: postsData[key].image_url,
        video_url: postsData[key].video_url,
        source_url: postsData[key].source_url,
        language: postsData[key].language,
        link: postsData[key].link,
        category: postsData[key].category,
        keywords: postsData[key].keywords,
      };
      posts.push(post);
    }
    return posts;
  };

  const handleLoadMore = async () => {
    setIsLoading(true);

    const data = await getPostsFromApi(JSON.stringify(page));
    const postsData: Post[] = data.results;
    const paginationData = data.pagination;
    console.log(paginationData);
    if (page > paginationData.totalPages) {
      setIsLoading(false);
      setEndReached(true);
      return;
    }

    const posts: Post[] = setPosts(postsData);

    addPosts(posts);

    setPage((prev) => prev + 1);

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

    setIsLoading(false);
  }

  const handleRefresh = async () => {
    setRefresh(true);
    handleInitialFetch();
    setEndReached(false);
    setRefresh(false);
  };

  useEffect(() => {
    handleInitialFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    allPosts,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  };
};

export default useManagePostsFetching;
