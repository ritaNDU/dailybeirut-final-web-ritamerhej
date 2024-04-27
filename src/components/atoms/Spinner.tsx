import "./styles.css";

type Props = {
  className?: string;
};
const Spinner = ({ className }: Props) => {
  return (
    <div className={`lds-circle color text-textColor ${className}`}>
      <div></div>
    </div>
  );
};

export default Spinner;
