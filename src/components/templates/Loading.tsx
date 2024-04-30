import Spinner from "../atoms/Spinner";

const Loading = () => {
  return (
    <div className="flex h-screen place-items-center bg-newspaper-background bg-cover justify-center">
      <Spinner className="text-textColor" />
    </div>
  );
};

export default Loading;
