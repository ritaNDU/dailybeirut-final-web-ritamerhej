type Props = {
  children: React.JSX.Element;
  name: string;
};
const AuthenticationScreensTemplate = ({ children, name }: Props) => {
  return (
    <div>
      <p>{name}</p>
      {children}
    </div>
  );
};

export default AuthenticationScreensTemplate;
