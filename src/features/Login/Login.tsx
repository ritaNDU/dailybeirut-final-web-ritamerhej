import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      Login
      <Link to={"/signup"}>Create An Account</Link>
    </div>
  );
}

export default Login;
