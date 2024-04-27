import { NavLink } from "react-router-dom";
import useManageUser from "../../hooks/useManageUser";
import useManageSecureStorage from "../../hooks/useManageSecureStorage";
import NavigationButton from "../atoms/Buttons/NavigationButton";

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
        <div className="flex p-3 shadow-lg">
          <nav className="flex justify-center w-full gap-3 ">
            <NavLink
              to={"/dailynews"}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary text-accentColor text-medium font-bold p-1 rounded-xl"
                  : "bg-accentColor text-primary text-medium font-bold p-1 rounded-xl"
              }
            >
              Daily News
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-primary text-accentColor text-medium font-bold p-1 rounded-xl"
                  : "bg-accentColor text-primary text-medium font-bold p-1 rounded-xl"
              }
              to={"/allnews"}
            >
              All News
            </NavLink>
            <NavigationButton
              name="Signout"
              onClick={handleSignOut}
              className="bg-primary text-accentColor text-medium font-bold p-1 rounded-xl"
            />
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
