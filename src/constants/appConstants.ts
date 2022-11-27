import { paths } from "Routes";

export const DOCUMENT_TABS = [
  {
    id: 1,
    name: "Certificates",
    path: paths.CERTIFICATES,
  },
  {
    id: 2,
    name: "Badges",
  },
  {
    id: 3,
    name: "Tags",
  },
  {
    id: 4,
    name: "Invitations",
  },
];

export const CERTIFICATE_STEPS = [
  { value: 1, label: "Upload Certificate", path: paths.CERTIFICATES_UPLOAD },
  { value: 2, label: "Name Field", path: paths.CERTIFICATES_NAME },
  { value: 3, label: "Upload List", path: paths.CERTIFICATES_UPLOAD_LIST },
  { value: 4, label: "Preview", path: paths.CERTIFICATES_PREVIEW },
];
