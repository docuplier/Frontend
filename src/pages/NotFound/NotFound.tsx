import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h3">404 Page not found</Typography>
    </Box>
  );
};

export default NotFound;
