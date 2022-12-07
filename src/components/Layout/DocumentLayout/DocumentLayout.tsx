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
import React, { FC } from "react";
import Footer from "../Footer";

export interface IDocumentLayout {
  steps: { label: string; value: number; path: string }[];
  tabItems: { id: number; name: string }[];
}

const DocumentLayout: FC<IDocumentLayout> = ({ steps, tabItems }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentStep, setCurrentStep] = React.useState(1);
  const [uploaded, setUploaded] = React.useState<{
    doc: File | null;
    list: File | null;
  }>({ doc: null, list: null });

  console.log(currentStep);

  return (
    <Box
      pl={isMobile ? 4 : 10}
      pr={isMobile ? 4 : 20}
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      sx={{
        height: isMobile ? "100%" : "100vh",
        pt: theme.spacing(5),
        // pb: theme.spacing(10),
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={3} sx={{ height: "100%" }}>
          <Stack spacing={6}>
            <Link to="/">
              <img src={LogoWhite} alt="" width={isMobile ? 126.8 : 180} />
              {/* <img src={LogoWhite} alt="" width="20%" /> */}
            </Link>

            {!isMobile && (
              <SharedStepper
                orientation="vertical"
                steps={steps}
                current={currentStep}
                isMobile={isMobile}
              />
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ height: "100%" }}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <TabButtons activeTab={1} isMobile={isMobile} data={tabItems} />
            </Grid>
            {isMobile && (
              <Grid item xs={12}>
                <SharedStepper
                  orientation="horizontal"
                  steps={steps}
                  current={currentStep}
                  isMobile={isMobile}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <Outlet
                context={{
                  setCurrentStep,
                  uploaded,
                  setUploaded,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default DocumentLayout;
