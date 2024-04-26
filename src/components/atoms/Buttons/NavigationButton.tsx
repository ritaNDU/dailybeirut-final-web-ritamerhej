import Spinner from "../Spinner";

type Props = {
  name: string;
  onClick: () => void;
  isLoading?: boolean;
};
const NavigationButton = ({ name, onClick, isLoading }: Props) => {
  return (
    <button onClick={onClick}>
      <p>{name}</p>
      {isLoading && <Spinner />}
    </button>
  );
};

export default NavigationButton;
