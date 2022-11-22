import { lazy } from "react";

export const paths = {
  HOME: "/",
  UPLOAD: "/document",
};

const routes = [
  {
    path: paths.HOME,
    exact: true,
    component: lazy(() => import("../pages/Landing/Landing")),
  },
  {
    path: paths.UPLOAD,
    exact: true,
    component: lazy(() => import("../pages/UploadDocument/UploadDocument")),
  },
  {
    path: "/name-field",
    exact: true,
    component: lazy(() => import("../pages/TextField/TextField")),
  },
  {
    path: "*",
    exact: true,
    component: lazy(() => import("../pages/NotFound/NotFound")),
  },
];

export default routes;
