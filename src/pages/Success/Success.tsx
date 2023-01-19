import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SuccessIcon from "assets/success.svg";
import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { paths } from "Routes";
import { getPathByName } from "utils/getPathsByName";

const Success = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const context: any = useOutletContext();

  React.useEffect(() => {
    context?.setCurrentStep(4);
  }, []);

  return (
    <Stack
      spacing={6}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <img src={SuccessIcon} alt="" width="100%" />
      </Box>
      <Typography variant="h2" color="success">
        Success!!
      </Typography>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        The Certificates has been sent to the recipients
      </Typography>

      <Box>
        <Button
          variant="contained"
          sx={{ width: "200px", height: "40px", mb: 4 }}
          onClick={() => navigate(getPathByName(context.activeTab, 1))}
        >
          Upload New List
        </Button>
      </Box>
    </Stack>
  );
};

export default Success;
