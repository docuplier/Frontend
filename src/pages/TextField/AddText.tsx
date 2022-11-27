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

const AddText = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack spacing={12}>
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
            <Button variant="contained" sx={{ height: "48px", width: "200px" }}>
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
            navigate(paths.CERTIFICATES);
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ width: "200px", height: "48px" }}
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
