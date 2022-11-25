import { Check } from "@mui/icons-material";
import { Box, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { StepIconProps } from "@mui/material/StepIcon";
import { IStepperProps } from "interfaces";
import { FC } from "react";
import { QontoConnector, QontoStepIconRoot } from "./sharedStepper.style";
import Loading from "assets/loading.svg";

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

const SharedStepper: FC<IStepperProps> = ({ orientation, steps, current }) => {
  return (
    <Stack spacing={3}>
      <Stepper
        sx={{ display: "flex", justifyContent: "center" }}
        orientation={orientation}
        // alternativeLabel
        activeStep={current}
        connector={<QontoConnector />}
      >
        {steps?.map(({ label, value }) => (
          <Step key={value}>
            <Box>
              {" "}
              <StepLabel
                StepIconComponent={QontoStepIcon}
                sx={{ paddingBlock: (theme) => theme.spacing(6) }}
              >
                <Box ml={2}>{label}</Box>
              </StepLabel>
            </Box>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default SharedStepper;
