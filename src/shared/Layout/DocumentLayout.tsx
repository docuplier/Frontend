import React, { useState } from "react";
import { Box, Typography, styled, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import { ReactComponent as ProgressChecker } from "assets/svgs/progressChecker.svg";
import { uploadLayoutTypes } from "../../interfaces/uploadLayoutTypes";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import Check from "@mui/icons-material/Check";
// import { ReactComponent as BackArrow } from "assets/svgs/backarrow.svg";

function DocumentLayout(props: uploadLayoutTypes) {
  const {
    children,
    currentComponent,
    formStepperNavItems,
    backArrow,
    formTitle,
    formSubtitle,
    onArrowClick,
    topRightContents,
  } = props;

  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  const navigate = useNavigate();

  function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  return (
    <LayoutContainer>
      <Box marginTop="50px" marginLeft="50px" width="20%">
        <Stack spacing={3}>
          <Stepper
            sx={{ display: "flex", justifyContent: "center" }}
            orientation="vertical"
            // alternativeLabel
            activeStep={currentComponent}
            connector={<QontoConnector />}
          >
            {formStepperNavItems?.map((label) => (
              <Step key={label?.navNumber}>
                <Box>
                  {" "}
                  <StepLabel
                    StepIconComponent={QontoStepIcon}
                    // sx={{ display: "flex" }}
                  >
                    <Box>{label?.navName}</Box>
                  </StepLabel>
                </Box>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </Box>

      <ChildContainer>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={4}>
            {backArrow && (
              <Box
                sx={{ cursor: "pointer" }}
                onClick={onArrowClick ? onArrowClick : () => navigate(-1)}
              >
                <Box mb={1}></Box>
                {/* <BackArrow /> */}
              </Box>
            )}
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                color="main"
                fontWeight={700}
              >
                {formTitle}
              </Typography>
              <Typography variant="body1" gutterBottom color="secondary">
                {formSubtitle}
              </Typography>
            </Box>
          </Stack>
          <Box>{topRightContents}</Box>
        </Stack>
        {children}
      </ChildContainer>
    </LayoutContainer>
  );
}

export default DocumentLayout;

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[900] : "#eaeaf0",
    display: "flex",
    height: 20,
    width: 26,
    padding: "0px",
    alignItems: "center",
    justifyContent: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 25,
      border: "2px solid #784af4",
      borderRadius: "100%",
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 3,
    left: "calc(50% + 16px)",
    right: "calc(-50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[900] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
    display: "flex",
    alignItems: "center",
    height: 60,
  },
}));

const LayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  // justifyContent: "space-between",
  marginTop: "-0.8rem",
}));

const ChildContainer = styled(Box)(({ theme }) => ({
  width: "70%",
  justifySelf: "center",
  padding: "2rem",
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  borderLeft: `1px solid #E0E0E0`,
  height: "100vh",
  position: "fixed",
  right: 0,
  width: "23%",
}));

const ActiveBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  padding: "1.2rem",
  borderLeft: `3px solid ${theme.palette.primary.main}`,
}));

const NonActiveBox = styled(Box)(({ theme }) => ({
  padding: "1.2rem",
}));

const NavNumber = styled(Box)(({ theme }) => ({
  height: "25px",
  width: "25px",
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.background.default,
  fontSize: 12,
}));
