import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const BrandsSection = () => {
  return (
    <Grid container spacing={10} p={16} minHeight={369}>
      <Grid item width="100%">
        <Typography variant="h1" textAlign="center">
          Brands
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Box></Box>
            <Typography variant="h4"></Typography>
            <Typography variant="body1" textAlign="center"></Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BrandsSection;
