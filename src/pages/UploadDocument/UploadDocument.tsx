import { useMediaQuery, useTheme } from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { paths } from "Routes";

const tabItems = [
  {
    id: 1,
    name: "Certificates",
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

const steps = [
  { value: 1, label: "Upload Certificate" },
  { value: 2, label: "Name Field" },
  { value: 3, label: "Upload List" },
  { value: 4, label: "Preview" },
];

const UploadDocument = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const context: any = useOutletContext();

  React.useEffect(() => {
    context?.setCurrentStep(0);
  }, []);

  const handleUpload = (data: File) => {
    navigate(paths.CERTIFICATES_NAME, {
      state: data,
    });
  };
  return (
    <Dropzone
      accept={{ "image/jpeg": [], "image/png": [], ".pdf": [] }}
      onUpload={handleUpload}
      theme={theme}
      title="PDF, PNG, JPEG files are supported"
    />
  );
};

export default UploadDocument;
