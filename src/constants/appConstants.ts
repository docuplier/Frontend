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

export const FONTS = [
  {
    label: "Default",
    value: "'Nunito', sans-serif;",
  },
  { label: "Dosis", value: "'Dosis', sans-serif" },
  {
    label: "EB Garamond",
    value: "'EB Garamond', serif",
  },
  {
    label: "Fira Sans",
    value: "'Fira Sans', sans-serif",
  },
  {
    label: "Lato",
    value: "'Lato', sans-serif",
  },
  {
    label: "Libre Baskerville",
    value: "''Libre Baskerville', serif",
  },
  {
    label: "Libre Caslon Text",
    value: "'Libre Caslon Text', serif",
  },
  {
    label: "Martian Mono",
    value: "'Martian Mono', monospace",
  },
  {
    label: "Merriweather",
    value: "'Merriweather', serif",
  },
  {
    label: "Montserrat",
    value: "'Montserrat', sans-serif",
  },
  {
    label: "Open Sans",
    value: "'Open Sans', sans-serif",
  },
  {
    label: "PT Serif",
    value: "'PT Serif', serif",
  },
];
