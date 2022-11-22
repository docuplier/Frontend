import { Box, Typography, styled, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import { ReactComponent as ProgressChecker } from "assets/svgs/progressChecker.svg";
import { uploadLayoutTypes } from "../../interfaces/uploadLayoutTypes";
// import { ReactComponent as BackArrow } from "assets/svgs/backarrow.svg";

function UploadLayout(props: uploadLayoutTypes) {
  const {
    children,
    currentComponent,
    formStepperTitle,
    formStepperSubtitle,
    formStepperNavItems,
    backArrow,
    formTitle,
    formSubtitle,
    onArrowClick,
    topRightContents,
  } = props;
  const navigate = useNavigate();

  return (
    <LayoutContainer>
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
      <ProgressContainer>
        <Box px={6} paddingTop={6}>
          <Typography color="main" fontWeight={500} fontSize={14}>
            {formStepperTitle}
          </Typography>
          <Typography color="secondary" mb={8} fontSize={14} fontWeight={400}>
            {formStepperSubtitle}
          </Typography>
        </Box>
        <Divider />
        <Box>
          {formStepperNavItems.map((item, index) => {
            if (item.navNumber === currentComponent) {
              return (
                <ActiveBox display="flex" p={3} key={item.navNumber}>
                  <NavNumber>
                    {item.navNumber > currentComponent ||
                    item.navNumber === currentComponent ? (
                      item.navNumber
                    ) : (
                      //   <ProgressChecker />
                      <Box>djjdd</Box>
                    )}
                  </NavNumber>
                  <Typography color="main" ml={4} fontSize={14}>
                    {item.navName}
                  </Typography>
                </ActiveBox>
              );
            } else {
              return (
                <NonActiveBox display="flex" p={3} key={item.navNumber}>
                  <NavNumber>
                    {item.navNumber > currentComponent ||
                    item.navNumber === currentComponent ? (
                      item.navNumber
                    ) : (
                      //   <ProgressChecker />
                      <Box>Second progress checkker</Box>
                    )}
                  </NavNumber>
                  <Typography color="main" ml={4} fontSize={14}>
                    {item.navName}
                  </Typography>
                </NonActiveBox>
              );
            }
          })}
        </Box>
      </ProgressContainer>
    </LayoutContainer>
  );
}

export default UploadLayout;

const LayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
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
