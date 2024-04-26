import { NavLink } from "react-router-dom";
import useManageUser from "../../hooks/useManageUser";

const NavBar = () => {
  const { isUserSignedIn } = useManageUser();

  return (
    <>
      {isUserSignedIn && (
        <div>
          <nav>
            <NavLink to={"/dailynews"}>Daily News</NavLink>
            <NavLink to={"/allnews"}>All News</NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
