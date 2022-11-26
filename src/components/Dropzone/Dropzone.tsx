import { Box, IconButton, Theme } from "@mui/material";
import { useEffect, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import PreUpload from "./components/PreUpload";
import closeIcon from "assets/close.svg";

export interface IDropzoneProps {
  theme: Theme;
  onUpload: (data: File) => void;
  onDrop?: () => void;
  open?: () => void;
  accept: Accept;
}

const Dropzone = ({
  theme,
  onDrop,
  accept,
  open,
  onUpload,
}: IDropzoneProps) => {
  const [disabled, setDisabled] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { getRootProps, getInputProps, acceptedFiles, inputRef } = useDropzone({
    accept,
    onDrop,
    disabled,
  });

  useEffect(() => {
    if (acceptedFiles[0]?.name) {
      setDisabled(true);
      setFile(acceptedFiles[0]);
    } else {
      setDisabled(false);
      setFile(null);
    }
  }, [acceptedFiles[0]?.name]);

  const removeFile = () => {
    setFile(null);
  };

  return (
    <Box
      {...getRootProps({ className: "dropzone" })}
      sx={{
        border: `2px dashed ${theme.palette.common.white}`,
        borderRadius: "8px",
        position: "relative",
      }}
      p={10}
    >
      <input className="input-zone" {...getInputProps()} />
      {file?.name && (
        <IconButton
          size="small"
          color="primary"
          sx={{
            position: "absolute",
            top: "20px",
            right: "10px",
            background: theme.palette.action.disabledBackground,
          }}
          onClick={removeFile}
        >
          <img src={closeIcon} alt="close" />
        </IconButton>
      )}
      <PreUpload
        theme={theme}
        onUploadClick={(data?: string) =>
          data ? onUpload(acceptedFiles[0]) : open!()
        }
        fileName={file?.name}
      />
    </Box>
  );
};

export default Dropzone;
