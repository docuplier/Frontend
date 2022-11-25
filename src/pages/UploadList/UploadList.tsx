import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import { useNavigate } from "react-router-dom";
import SharedStepper from "components/SharedStepper/SharedStepper";
import TabButtons from "components/TabButtons/TabButtons";
import LogoWhite from "assets/logo-white.svg";
import Spreadsheet from "assets/Spreadsheet.svg";

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

const UploadList = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleUpload = (data: File) => {
    console.log(data);
    navigate("/preview");
  };
  return (
    <Box
      pl={10}
      pr={20}
      sx={{
        height: isMobile ? "100%" : "100vh",
        pt: theme.spacing(5),
        pb: theme.spacing(10),
      }}
    >
      <Grid container>
        <Grid item xs={12} md={3} sx={{ height: "100%" }}>
          <Stack spacing={10}>
            <img src={LogoWhite} alt="" width={isMobile ? 126.8 : "50%"} />
            <SharedStepper orientation="vertical" steps={steps} current={3} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={8} sx={{ height: "100%" }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TabButtons activeTab={1} isMobile={isMobile} data={tabItems} />
            </Grid>
            <Grid item xs={12}>
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
                  Create and upload a list of the recipients in a spreadsheet
                  using this format below.
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
                    navigate("/name-field");
                  }}
                >
                  Back
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UploadList;
