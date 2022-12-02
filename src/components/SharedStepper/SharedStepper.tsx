import { Check } from "@mui/icons-material";
import {
  Box,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { StepIconProps } from "@mui/material/StepIcon";
import { IStepperProps } from "interfaces";
import { FC } from "react";
import { QontoConnector, QontoStepIconRoot } from "./sharedStepper.style";
import Loading from "assets/loading.svg";
import { pxToRem } from "utils/pxToRem";

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed && <Check className="QontoStepIcon-completedIcon" />}
      {active && <img src={Loading} alt="" />}
      {!active && !completed && <div className="QontoStepIcon-circle" />}
    </QontoStepIconRoot>
  );
}

const SharedStepper: FC<IStepperProps> = ({
  orientation,
  steps,
  current,
  isMobile,
}) => {
  return (
    <Box>
      <Stepper
        sx={{ display: "flex", justifyContent: "center" }}
        orientation={orientation}
        alternativeLabel={isMobile}
        activeStep={current}
        connector={<QontoConnector />}
      >
        {steps?.map(({ label, value }) => (
          <Step key={value}>
            <StepLabel
              StepIconComponent={QontoStepIcon}
              sx={{
                paddingBlock: (theme) => (isMobile ? 0 : theme.spacing(6)),
                paddingInline: 0,
              }}
            >
              <Typography
                variant={isMobile ? "overline" : "body2"}
                ml={isMobile ? 0 : 2}
                fontSize={pxToRem(isMobile ? 7 : 14)}
                textTransform="capitalize"
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default SharedStepper;
