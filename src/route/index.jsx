import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectedIfAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Spinner from "../components/Spinner";
import Container from "../layouts/Container";
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "friend",
        element: <FriendPage />,
      },
      {
        path: "profile/:userId",
        element: <ProfilePage />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
