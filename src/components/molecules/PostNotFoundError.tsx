function PostNotFoundError() {
  return (
    <>
      <h2 className="text-large font-bold place-self-center">Post Not Found</h2>
      <p className="text-normal">
        You have either followed the wrong link, or have internet connection
        problems.
      </p>
    </>
  );
}

export default PostNotFoundError;
