import { useNavigate } from "react-router-dom";
import NavigationButton from "../../components/atoms/Buttons/NavigationButton";

export default function ErrorPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col gap-2 justify-center place-items-center">
      <h1 className="text-extraLarge font-bold">Oops!</h1>
      <p className="text-normal font-medium">
        An unexpected error has occurred.
      </p>
      <NavigationButton name="Go Back" onClick={goBack} className="w-fit p-2" />
    </div>
  );
}
