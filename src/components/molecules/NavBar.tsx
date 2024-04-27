import { NavLink } from "react-router-dom";
import useManageUser from "../../hooks/useManageUser";
import useManageSecureStorage from "../../hooks/useManageSecureStorage";

const NavBar = () => {
  const { isUserSignedIn, signUserOut } = useManageUser();
  const { removeUserInfo } = useManageSecureStorage();
  const handleSignOut = () => {
    signUserOut();
    removeUserInfo();
  };
  return (
    <>
      {isUserSignedIn && (
        <div>
          <nav>
            <NavLink to={"/dailynews"}>Daily News</NavLink>
            <NavLink to={"/allnews"}>All News</NavLink>
            <button onClick={handleSignOut}>Sign Out</button>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
