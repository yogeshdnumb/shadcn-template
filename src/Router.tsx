import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./features/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import IfAuthenticated from "./components/ui/IfAuthenticated";

export default function Router() {
  const routes = createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/login", element: <LoginPage /> },
        {
          path: "/profile",
          element: (
            <IfAuthenticated>
              <ProfilePage />
            </IfAuthenticated>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
