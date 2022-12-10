import { Container, Grid, Typography } from "@mui/material";
import { ILandingSection } from "interfaces";
import React, { Fragment } from "react";
import { pxToRem } from "utils/pxToRem";
import Number1 from "assets/1.svg";
import Number2 from "assets/2.svg";
import Number3 from "assets/3.svg";
import Number4 from "assets/4.svg";

const data = [
  {
    itemNumber: <img src={Number1} alt="Number 1" />,
    description:
      "Choose files: Upload name list and the preferred document type’s design",
  },
  {
    itemNumber: "",
    description: "",
  },
  {
    itemNumber: "",
    description: "",
  },
  {
    itemNumber: <img src={Number2} alt="Number 2" />,
    description:
      "Create name field: Be sure to choose befitting fonts and drag to position based on your design uploaded",
  },
  {
    itemNumber: <img src={Number3} alt="Number 3" />,
    description:
      "Create email duplicates: Email or download certificates for printing",
  },
  {
    itemNumber: "",
    description: "",
  },
  {
    itemNumber: "",
    description: "",
  },
  {
    itemNumber: <img src={Number4} alt="Number 4" />,
    description:
      "Create name field: Be sure to choose befitting fonts and drag to position",
  },
  {
    itemNumber: "",
    description: "",
  },
];

const EasyStepsSection = ({ theme, isMobile }: ILandingSection) => {
  return (
    <Grid
      container
      spacing={10}
      p={isMobile ? 8 : 16}
      sx={{ pl: isMobile ? 8 : "13rem", pr: isMobile ? 8 : "13rem" }}
    >
      <Grid item width="100%">
        <Typography variant="h1" textAlign="center">
          Just 4 Easy Steps
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          rowSpacing={10}
          justifyContent="center"
          alignItems="center"
        >
          {data.map((v) => {
            return isMobile && !v.itemNumber ? undefined : (
              <Grid
                item
                xs={12}
                md={6}

                // pl={10}
                // pr={10}
              >
                <Grid container alignItems="center">
                  <Grid item xs={4} md={3}>
                    <Typography
                      // variant="h1"
                      // fontSize={isMobile ? pxToRem(124) : pxToRem(200)}
                      color="#101549"
                      sx={{
                        textShadow:
                          "-6px -6px 8px rgba(255, 255, 255, 0.1), -2px -2px 2px rgba(255, 255, 255, 0.05), 1px 1px 2px rgba(11, 13, 39, 0.25), 8px 4px 12px rgba(11, 13, 39, 0.25)",
                      }}
                    >
                      {v.itemNumber}
                    </Typography>
                  </Grid>
                  <Grid item xs={8} md={8}>
                    <Typography
                      variant="subtitle1"
                      fontSize={isMobile ? "16px" : ""}
                      ml={isMobile ? "30px" : ""}
                    >
                      {v.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EasyStepsSection;
