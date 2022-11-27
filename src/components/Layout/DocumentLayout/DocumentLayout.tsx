import {
  Box,
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SharedStepper from "components/SharedStepper/SharedStepper";
import TabButtons from "components/TabButtons/TabButtons";
import LogoWhite from "assets/logo-white.svg";
import { FC } from "react";
import Footer from "../Footer";

export interface IDocumentLayout {
  steps: { label: string; value: number; path: string }[];
  tabItems: { id: number; name: string }[];
}

const DocumentLayout: FC<IDocumentLayout> = ({ steps, tabItems }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      pl={10}
      pr={20}
      sx={{
        position: "relative",
        height: isMobile ? "100%" : "100vh",
        pt: theme.spacing(5),
        pb: theme.spacing(10),
      }}
    >
      <Grid container>
        <Grid item xs={12} md={3} sx={{ height: "100%" }}>
          <Stack spacing={6}>
            <Link to="/">
              <img src={LogoWhite} alt="" width={isMobile ? 126.8 : "50%"} />
            </Link>

            <SharedStepper orientation="vertical" steps={steps} current={1} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={8} sx={{ height: "100%" }}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <TabButtons activeTab={1} isMobile={isMobile} data={tabItems} />
            </Grid>
            <Grid item xs={12}>
              <Outlet />
              {/* <Dropzone
                accept={{ "image/jpeg": [], "image/png": [], ".pdf": [] }}
                onUpload={handleUpload}
                theme={theme}
              /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ position: "absolute", bottom: "20px", left: "50%" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default DocumentLayout;
