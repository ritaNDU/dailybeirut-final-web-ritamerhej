import { Navigate } from "react-router-dom";
import useManageUser from "../../hooks/useManageUser";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isUserSignedIn } = useManageUser();

  if (!isUserSignedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
