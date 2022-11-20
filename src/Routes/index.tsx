import { lazy } from "react";

export const paths = {
  HOME: "/",
};

const routes = [
  {
    path: paths.HOME,
    exact: true,
    component: lazy(() => import("../pages/Landing/Landing")),
  },
  {
    path: "*",
    exact: true,
    component: lazy(() => import("../pages/NotFound/NotFound")),
  },
];

export default routes;
