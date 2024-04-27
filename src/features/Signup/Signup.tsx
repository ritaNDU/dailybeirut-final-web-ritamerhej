import { Link } from "react-router-dom";
import AuthenticationScreensTemplate from "../../components/templates/AuthenticationScreensTemplate";
import SignupForm from "../../components/organisms/SignupForm";

function Signup() {
  return (
    <div>
      <Link to={"/"}>Back to login</Link>
      <AuthenticationScreensTemplate name="Signup">
        <SignupForm />
      </AuthenticationScreensTemplate>
    </div>
  );
}

export default Signup;
