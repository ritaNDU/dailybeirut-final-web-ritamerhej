import { Link } from "react-router-dom";
import AuthenticationScreensTemplate from "../../components/templates/AuthenticationScreensTemplate";
import SignupForm from "../../components/organisms/SignupForm";
import backArrowIcon from "../../assets/backarrow.png";
function Signup() {
  return (
    <div className="h-screen flex flex-col place-items-center justify-center bg-newspaper-background bg-cover bg-top  bg-no-repeat">
      <Link to={"/"} className="absolute top-3 left-3">
        <img
          src={backArrowIcon}
          alt="Go Back Icon"
          className="w-10 h-10 hover:animate-spin"
        />
      </Link>
      <AuthenticationScreensTemplate name="Signup">
        <SignupForm />
      </AuthenticationScreensTemplate>
    </div>
  );
}

export default Signup;
