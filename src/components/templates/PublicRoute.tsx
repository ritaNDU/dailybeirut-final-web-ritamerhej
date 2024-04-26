import { Navigate } from "react-router-dom";
import useManageUser from "../../hooks/useManageUser";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isUserSignedIn } = useManageUser();

  if (isUserSignedIn) {
    return <Navigate to="/dailynews" />;
  }
  return children;
};

export default PublicRoute;
