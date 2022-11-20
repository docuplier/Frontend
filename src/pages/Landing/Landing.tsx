import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { EasyStepsSection, HeroSection, UseCasesSection } from "./components";

const Landing = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid item sx={{ background: theme.palette.grey[600] }}>
        <HeroSection theme={theme} isMobile={matches} />
      </Grid>
      <Grid item>
        <UseCasesSection />
      </Grid>
      <Grid item>
        <EasyStepsSection theme={theme} isMobile={matches} />
      </Grid>
    </Grid>
  );
};

export default Landing;
