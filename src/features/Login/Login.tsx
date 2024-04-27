import { Link } from "react-router-dom";
import AuthenticationScreensTemplate from "../../components/templates/AuthenticationScreensTemplate";
import SigninForm from "../../components/organisms/SigninForm";

function Login() {
  return (
    <div>
      <AuthenticationScreensTemplate name="Login">
        <SigninForm />
      </AuthenticationScreensTemplate>
      <Link to={"/signup"}>Create An Account</Link>
    </div>
  );
}

export default Login;
