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
import { useNavigate, useLocation } from "react-router-dom";
import { paths } from "Routes";
import { styled } from "@mui/material";
import GoogleFontLoader from "react-google-font-loader";

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
  const location = useLocation();
  console.log("loc", location);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack spacing={12}>
      <Box display="flex" width="100%" justifyContent="center">
        <Box
          display="flex"
          width="100%"
          justifyContent="center"
          sx={{
            //  backgroundColor: "red",
            "@media screen and (max-width:768px)": {
              width: "100%",
            },
          }}
          //   flexWrap="wrap"
        >
          {" "}
          <Box display="flex" alignItems="flex-end" mx={6}>
            {" "}
            <ButtonBox variant="contained" sx={{ height: "48px", px: 12 }}>
              Add A Text Box
            </ButtonBox>
            <Button
              variant="contained"
              sx={{
                display: "none",
                height: "40px",
                px: 4,

                "@media screen and (max-width:768px)": {
                  display: "flex",
                },
              }}
            >
              {" "}
              Add Text
            </Button>
          </Box>
          <Box mx={6} width="28%">
            <Typography variant="body2">Select Font</Typography>
            <TextField
              select
              fullWidth
              // size="small"
              sx={{
                width: "100%",

                "& .MuiOutlinedInput-root": {
                  height: "48px",
                },
              }}
            ></TextField>
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
        <img
          src={location?.state && URL.createObjectURL(location?.state)}
          style={{ width: "555px", height: "393px" }}
        />
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        marginTop="30px"
        sx={{
          flexWrap: "Wrap",
          // "@media screen and (max-width:768px)": {
          //   display: "flex",
          //   width: "100%",
          //   justifyContent: "center",
          // },
        }}
      >
        <Button
          sx={{
            height: "48px",
            border: "1px solid #fff",
            color: "#fff",
            px: 14,
            mb: 4,

            "@media screen and (max-width:768px)": {
              px: 6,
            },
            "&:hover": {
              border: "none",
            },
          }}
          onClick={() => {
            navigate(paths.CERTIFICATES);
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{
            //  width: "200px",
            height: "48px",
            px: 14,
            mb: 4,
            "@media screen and (max-width:768px)": {
              px: 6,
            },
          }}
          onClick={() => {
            navigate(paths.CERTIFICATES_UPLOAD_LIST);
          }}
        >
          Continue
        </Button>
      </Box>
    </Stack>
  );
};

export default AddText;

const ButtonBox = styled(Button)({
  "@media screen and (max-width:768px)": {
    display: "none",
  },
});
