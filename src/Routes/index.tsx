import DocumentLayout from "components/Layout/DocumentLayout/DocumentLayout";
import path from "node:path/win32";
import { lazy } from "react";

export const paths = {
  HOME: "/",
  MAIN: "/*",
  UPLOAD: "/document",
  CERTIFICATES: "/certificates",
  CERTIFICATES_UPLOAD: "/certificates/upload",
  CERTIFICATES_NAME: "/certificates/name-field",
  CERTIFICATES_UPLOAD_LIST: "/certificates/upload-list",
  CERTIFICATES_PREVIEW: "/certificates/preview",
  INDIVIDUAL_CERTIFICATES: "/individual-document",
  ORGANSATION_CERTIFICATES: "/organisation-document",
};

const routes = {
  main: [
    {
      path: paths.HOME,
      exact: true,
      component: lazy(() => import("../pages/Landing/Landing")),
    },
    {
      path: paths.INDIVIDUAL_CERTIFICATES,
      exact: true,
      component: lazy(
        () => import("../pages/Documents/IndividaulDocumentView")
      ),
    },
    {
      path: paths.ORGANSATION_CERTIFICATES,
      exact: true,
      component: lazy(
        () => import("../pages/Documents/OrganisationDocumnetView")
      ),
    },
    {
      path: "*",
      exact: true,
      component: lazy(() => import("../pages/NotFound/NotFound")),
    },
  ],
  certificates: {
    path: paths.CERTIFICATES,
    exact: true,
    children: [
      {
        path: paths.CERTIFICATES_UPLOAD,
        exact: true,
        component: lazy(() => import("../pages/UploadDocument/UploadDocument")),
      },
      {
        path: paths.CERTIFICATES_NAME,
        exact: true,
        component: lazy(() => import("../pages/TextField/AddText")),
      },
      {
        path: paths.CERTIFICATES_UPLOAD_LIST,
        exact: true,
        component: lazy(() => import("../pages/UploadList/UploadList")),
      },
      {
        path: paths.CERTIFICATES_PREVIEW,
        exact: true,
        component: lazy(() => import("../pages/Preview/Preview")),
      },
    ],
  },
};

export default routes;
