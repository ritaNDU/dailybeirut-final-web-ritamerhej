type Props = {
  children: React.JSX.Element;
  name: string;
};
const AuthenticationScreensTemplate = ({ children, name }: Props) => {
  return (
    <div
      className="p-4 flex flex-col place-items-center w-10/12 h-fit bg-backgroundColor rounded-xl shadow-xl gap-3
    md:w-fit md:p-8"
    >
      <h2 className="text-large font-bold text-textColor">{name}</h2>
      {children}
    </div>
  );
};

export default AuthenticationScreensTemplate;
