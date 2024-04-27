import { useNavigate } from "react-router-dom";
import NavigationButton from "../../components/atoms/Buttons/NavigationButton";

export default function ErrorPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Oops!</h1>
      <p>An unexpected error has occurred.</p>
      <NavigationButton name="Go Back" onClick={goBack} />
    </div>
  );
}
