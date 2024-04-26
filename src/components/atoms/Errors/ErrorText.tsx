type Props = {
  error: string;
};

const ErrorText = ({ error }: Props) => {
  return <p>{error}</p>;
};

export default ErrorText;
