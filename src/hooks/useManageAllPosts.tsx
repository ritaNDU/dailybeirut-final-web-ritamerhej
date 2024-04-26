import Post from '../data/post.type';
import {add, store} from '../store/allPostsSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';

const useManageAllPosts = () => {
  const allPosts = useAppSelector(state => state.allPosts.value);
  const dispatch = useAppDispatch();

  const addPosts = (posts: Post[]) => {
    dispatch(add(posts));
  };
  const storePosts = (posts: Post[]) => {
    dispatch(store(posts));
  };

  return {
    allPosts,
    addPosts,
    storePosts,
  };
};

export default useManageAllPosts;
