import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import { useNavigate } from "react-router-dom";
import Spreadsheet from "assets/Spreadsheet.svg";
import { paths } from "Routes";

const UploadList = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleUpload = (data: File) => {
    console.log(data);
    navigate(paths.CERTIFICATES_PREVIEW);
  };
  return (
    <Stack spacing={12}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="body1" sx={{ my: "10px" }}>
          Create and upload a list of the recipients in a spreadsheet using this
          format below.
        </Typography>
        <img src={Spreadsheet} />
      </Box>
      <Dropzone
        accept={{ "image/jpeg": [], "image/png": [], ".pdf": [] }}
        onUpload={handleUpload}
        theme={theme}
      />
      <Box display="flex" justifyContent="flex-end" marginTop={"30px"}>
        <Button
          variant="contained"
          sx={{ height: "48px", width: "200px" }}
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
