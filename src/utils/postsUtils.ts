import Post from '../data/post.type';

export function getPostById(posts: Post[], postId: string) {
  return posts.find(post => post._id === postId);
}
