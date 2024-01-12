import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const Routes = (): JSX.Element => {
  type routeProps = Array<{
    path: string;
    element: JSX.Element;
  }>;

  const pageRoutes: routeProps = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <Home />,
    },
  ];

  const router = createBrowserRouter([...pageRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
