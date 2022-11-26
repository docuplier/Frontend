import path from "node:path/win32";
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
    component: lazy(() => import("../pages/TextField/AddText")),
  },
  {
    path: "/upload-list",
    exact: true,
    component: lazy(() => import("../pages/UploadList/UploadList")),
  },
  {
    path: "/preview",
    exact: true,
    component: lazy(() => import("../pages/Preview/Preview")),
  },
  {
    path: "*",
    exact: true,
    component: lazy(() => import("../pages/NotFound/NotFound")),
  },
];

export default routes;
