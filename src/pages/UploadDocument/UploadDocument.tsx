import { useMediaQuery, useTheme } from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { paths } from "Routes";

const UploadDocument = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const context: any = useOutletContext();

  React.useEffect(() => {
    context?.setCurrentStep(0);
  }, []);

  const handleUpload = (data: File) => {
    context?.setUploaded((prev: any) => ({
      ...prev,
      doc: URL.createObjectURL(data),
    }));
    navigate(paths.CERTIFICATES_NAME);
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
