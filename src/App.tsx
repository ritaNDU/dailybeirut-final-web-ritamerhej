import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";
import Login from "./features/Login/Login";
import ErrorPage from "./features/Error/Error";
import AllNews from "./features/AllNews/AllNews";
import Signup from "./features/Signup/Signup";
import DailyNews from "./features/DailyNews/DailyNews";
import PostDetails from "./features/PostDetails/PostDetails";
import PublicRoute from "./components/templates/PublicRoute";
import ProtectedRoute from "./components/templates/ProtectedRoute";

function App() {
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
    },
    {
      path: "/allnews",
      element: (
        <ProtectedRoute>
          <AllNews />
        </ProtectedRoute>
      ),
    },
    {
      path: "/news/:postId",
      element: (
        <ProtectedRoute>
          <PostDetails />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
