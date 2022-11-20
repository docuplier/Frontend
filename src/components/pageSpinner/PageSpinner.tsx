import { Box, CircularProgress } from "@mui/material";
import React from "react";

const PageSpinner = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default PageSpinner;
