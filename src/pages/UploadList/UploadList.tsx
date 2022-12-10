import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import { useNavigate, useOutletContext } from "react-router-dom";
import Spreadsheet from "assets/Spreadsheet.svg";
import { paths } from "Routes";
import React from "react";

const UploadList = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const context: any = useOutletContext();
  const imgStyle = {
    width: "330px",
  };
  const handleUpload = (data: File) => {
    context?.setUploaded((prev: any) => ({
      ...prev,
      list: URL.createObjectURL(data),
    }));
    navigate(paths.CERTIFICATES_PREVIEW);
  };

  React.useEffect(() => {
    context?.setCurrentStep(2);
  }, []);
  return (
    <Stack spacing={12}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <Typography variant="body1" sx={{ my: "10px" }}>
          Create and upload a list of the recipients in a spreadsheet using this
          format below.
        </Typography>{" "}
        <img src={Spreadsheet} style={isMobile ? imgStyle : {}} />
      </Box>
      <Dropzone
        accept={{
          ".csv": [],
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
            ".csv",
          ],
          "application/vnd.ms-excel": [],
        }}
        onUpload={handleUpload}
        theme={theme}
        title="PDF, PNG, JPEG files are supported"
      />
      <Box display="flex" justifyContent="flex-end" marginTop={"30px"}>
        <Button
          variant="contained"
          sx={{
            height: "48px",
            px: 14,
            mb: 6,
            "@media screen and (max-width:768px)": {
              px: 8,
            },
          }}
          onClick={() => {
            navigate(paths.CERTIFICATES_NAME);
          }}
        >
          Back
        </Button>
      </Box>
    </Stack>
  );
};

export default UploadList;
