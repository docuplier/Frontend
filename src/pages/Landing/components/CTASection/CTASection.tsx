import { Button, Grid, Paper, Typography } from "@mui/material";
import { ILandingSection } from "interfaces";

const CTASection = ({ theme, isMobile }: ILandingSection) => {
  return (
    <Grid container spacing={isMobile ? 0 : 10} p={isMobile ? 0 : 16}>
      <Grid item xs={12}>
        <Paper
          elevation={0}
          sx={{
            background: theme?.palette.grey[600],
            p: isMobile ? 4 : 24,
            borderRadius: "12px",
            height: "346px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={8}>
              <Typography variant={isMobile ? "h4" : "h2"}>
                What are you waiting for?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button
                size="large"
                variant="contained"
                fullWidth
                sx={{ maxWidth: 304, fontSize: "24px" }}
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
