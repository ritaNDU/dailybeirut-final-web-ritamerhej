type Props = {
  error: string;
};

const ErrorText = ({ error }: Props) => {
  return <p className="font-bold text-errorColor">{error}</p>;
};

export default ErrorText;
