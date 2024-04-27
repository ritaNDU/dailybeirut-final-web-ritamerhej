import { Link } from "react-router-dom";
import AuthenticationScreensTemplate from "../../components/templates/AuthenticationScreensTemplate";
import SigninForm from "../../components/organisms/SigninForm";

function Login() {
  return (
    <div className="h-screen flex flex-col place-items-center justify-center bg-newspaper-background bg-cover bg-top  bg-no-repeat">
      <AuthenticationScreensTemplate name="Login">
        <>
          <SigninForm />
          <Link to={"/signup"}>Create An Account</Link>
        </>
      </AuthenticationScreensTemplate>
    </div>
  );
}

export default Login;
