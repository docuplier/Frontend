import { useMediaQuery, useTheme } from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import React from "react";
import { getImageSize } from "react-image-size";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { getPathByName } from "utils/getPathsByName";

const UploadDocument = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const context: any = useOutletContext();

  console.log("mam", context.idempotencyKey);

  React.useEffect(() => {
    context?.setCurrentStep(0);
  }, []);

  const handleUpload = async (data: File) => {
    const imgUrl = URL.createObjectURL(data);
    const { width, height } = await getImageSize(imgUrl);
    context?.setUploaded((prev: any) => ({
      ...prev,
      doc: imgUrl,
      image: { src: data, width, height },
      dataFile: data,
    }));
    navigate(getPathByName(context.activeTab, 1));
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
