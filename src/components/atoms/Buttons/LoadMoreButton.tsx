import Spinner from "../Spinner";

type Props = {
  onClick: () => void;
  isLoading: boolean;
  endReached: boolean;
};

const LoadMoreButton = ({ onClick, isLoading, endReached }: Props) => {
  return (
    <button onClick={onClick} style={{ color: "white", background: "black" }}>
      <p>
        {endReached ? "No more news to show." : "Load More"}
        {isLoading ? <Spinner /> : <></>}
      </p>
    </button>
  );
};

export default LoadMoreButton;
