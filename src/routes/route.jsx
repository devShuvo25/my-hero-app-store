import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import Error from "../errorPages/Error";
import Details from "../components/Details";

const route = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'/home',
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "*",
        Component: Error,
      },
      {
        path: `/app/details/app/:id`,
        Component: Details,
      },
      {
        path: '/installation',
        Component: Installation,
      }
    ],
  },
]);

export default route;
