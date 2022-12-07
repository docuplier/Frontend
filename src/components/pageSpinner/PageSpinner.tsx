import { Box, CircularProgress } from "@mui/material";
import React from "react";

const PageSpinner = ({
  height,
  width,
}: {
  height?: string;
  width?: string;
}) => {
  return (
    <Box
      height={height || "100vh"}
      width={width || "100vw"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default PageSpinner;
