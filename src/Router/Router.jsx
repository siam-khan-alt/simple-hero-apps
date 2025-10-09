import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/AllApps";
import Installed from "../Pages/Installed/Installed";
import Details from "../Pages/Details/Details";
import ErrorHandle from "../Pages/Eror Handle/ErrorHandle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorHandle />,

    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",

        element: <Apps />,
      },
      {
        path: "/installed",

        Component: Installed,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
