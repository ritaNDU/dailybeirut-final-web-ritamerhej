import Spinner from "../Spinner";

type Props = {
  onClick: () => void;
  isLoading: boolean;
  endReached: boolean;
};

const LoadMoreButton = ({ onClick, isLoading, endReached }: Props) => {
  return (
    <button onClick={onClick} style={{ color: "white", background: "black" }}>
      <div>
        {endReached ? "No more news to show." : "Load More"}
        {isLoading ? <Spinner /> : <></>}
      </div>
    </button>
  );
};

export default LoadMoreButton;
