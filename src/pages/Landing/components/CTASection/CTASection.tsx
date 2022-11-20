import { Button, Grid, Paper, Typography } from "@mui/material";
import { ILandingSection } from "interfaces";
import React from "react";

const CTASection = ({ theme }: ILandingSection) => {
  return (
    <Grid container spacing={10} p={16}>
      <Grid item xs={12}>
        <Paper
          elevation={0}
          sx={{
            background: theme?.palette.grey[600],
            p: 24,
            borderRadius: "12px",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6} md={8}>
              <Typography variant="h2">What are you waiting for?</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button
                size="large"
                variant="contained"
                fullWidth
                sx={{ maxWidth: 304 }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CTASection;
