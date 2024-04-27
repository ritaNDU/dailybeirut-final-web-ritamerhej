import Spinner from "../Spinner";

type Props = {
  name: string;
  onClick: () => void;
  isLoading?: boolean;
  className?: string;
};
const NavigationButton = ({ name, onClick, isLoading, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-1 justify-center place-items-center bg-primary text-accentColor font-bold rounded-xl focus:outline-none focus:ring focus:ring-focusColor ${className}`}
    >
      <p>{name}</p>
      {isLoading && <Spinner className="text-accentColor" />}
    </button>
  );
};

export default NavigationButton;
