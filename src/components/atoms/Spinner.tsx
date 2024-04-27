import "./styles.css";

type Props = {
  className?: string;
};
const Spinner = ({ className }: Props) => {
  return (
    <div className={`lds-circle ${className}`}>
      <div></div>
    </div>
  );
};

export default Spinner;
