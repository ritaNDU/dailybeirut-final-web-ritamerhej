import { useEffect, useState } from "react";
import ErrorPage from "../features/Error/Error";
import ProtectedRoute from "../components/templates/ProtectedRoute";
import PostDetails from "../features/PostDetails/PostDetails";
import AllNews from "../features/AllNews/AllNews";
import DailyNews from "../features/DailyNews/DailyNews";
import Signup from "../features/Signup/Signup";
import PublicRoute from "../components/templates/PublicRoute";
import Login from "../features/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useManageUser from "../hooks/useManageUser";
import useManageSecureStorage from "../hooks/useManageSecureStorage";
import Loading from "../components/templates/Loading";

function MainNavigator() {
  const { getStoredUserInfo } = useManageSecureStorage();
  const { isUserSignedIn, signUserIn } = useManageUser();
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: (
        <PublicRoute>
          <Signup />
        </PublicRoute>
      ),
    },
    {
      path: "/dailynews",
      element: (
        <ProtectedRoute>
          <DailyNews />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/allnews",
      element: (
        <ProtectedRoute>
          <AllNews />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/news/:postId",
      element: (
        <ProtectedRoute>
          <PostDetails />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  useEffect(() => {
    function getToken() {
      try {
        const userInfo = getStoredUserInfo();
        if (
          userInfo &&
          userInfo.accessToken !== "" &&
          userInfo.refreshToken !== ""
        ) {
          signUserIn();
        }
      } finally {
        setIsLoading(false);
      }
    }
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserSignedIn]);
  if (isLoading) {
    return <Loading />;
  }
  return <RouterProvider router={router} />;
}

export default MainNavigator;
