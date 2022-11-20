import { Grid, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import HeroSection from "components/HeroSection/HeroSection";

const Landing = () => {
  const theme = useTheme();
  return (
    <Grid container direction="column">
      <Grid item sx={{ background: theme.palette.grey[600] }}>
        <HeroSection />
      </Grid>
    </Grid>
  );
};

export default Landing;
