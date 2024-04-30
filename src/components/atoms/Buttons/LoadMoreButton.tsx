import Spinner from "../Spinner";

type Props = {
  onClick: () => void;
  isLoading: boolean;
  endReached: boolean;
};

const LoadMoreButton = ({ onClick, isLoading, endReached }: Props) => {
  return (
    <button
      onClick={onClick}
      className="w-10/12 mb-3 h-10 bg-primary flex justify-center place-items-center gap-3 text-accentColor font-bold rounded-3xl focus:outline-none focus:ring focus:ring-focusColor text-normal 
      md:w-3/4"
    >
      <>
        {endReached ? "No more news to show" : "Load More"}
        {isLoading ? <Spinner /> : <></>}
      </>
    </button>
  );
};

export default LoadMoreButton;
