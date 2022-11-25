import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import SharedStepper from "components/SharedStepper/SharedStepper";
import TabButtons from "components/TabButtons/TabButtons";
import LogoWhite from "assets/logo-white.svg";
import { useNavigate } from "react-router-dom";

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

const AddText = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleUpload = (data: File) => {
    console.log(data);
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
            <SharedStepper orientation="vertical" steps={steps} current={2} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={8} sx={{ height: "100%" }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TabButtons activeTab={1} isMobile={isMobile} data={tabItems} />
            </Grid>
            <Grid item xs={12}>
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                marginBottom="30px"
              >
                <Box display="flex" width="50%" justifyContent="space-between">
                  {" "}
                  <Box display="flex" alignItems="flex-end">
                    {" "}
                    <Button
                      variant="contained"
                      sx={{ height: "48px", width: "200px" }}
                    >
                      Add A Text Box
                    </Button>
                  </Box>
                  <Box>
                    <Typography variant="body2">Select Font</Typography>
                    <TextField
                      select
                      fullWidth
                      sx={{
                        width: "200px",
                        "& .MuiOutlinedInput-root": {
                          height: "48px",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  border: `2px dashed ${theme.palette.common.white}`,
                  borderRadius: "8px",
                  position: "relative",
                }}
                p={10}
              >
                Display Certificate
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                marginTop="30px"
              >
                <Button
                  sx={{
                    width: "200px",
                    height: "48px",
                    border: "1px solid #fff",
                    color: "#fff",
                    "&:hover": {
                      border: "none",
                    },
                  }}
                  onClick={() => {
                    navigate("/document");
                  }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  sx={{ width: "200px", height: "48px" }}
                  onClick={() => {
                    navigate("/upload-list");
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddText;
