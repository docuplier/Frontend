import { Container, Grid, Typography } from "@mui/material";
import { ILandingSection } from "interfaces";
import React, { Fragment } from "react";
import { pxToRem } from "utils/pxToRem";

const data = [
  {
    itemNumber: "1",
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
    itemNumber: "2",
    description:
      "Create name field: Be sure to choose befitting fonts and drag to position based on your design uploaded",
  },
  {
    itemNumber: "3",
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
    itemNumber: "4",
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
    <Grid container spacing={10} p={isMobile ? 8 : 16}>
      <Grid item width="100%">
        <Typography variant="h1" textAlign="center">
          Just 4 Easy Steps
        </Typography>
      </Grid>
      <Grid item>
        <Grid container rowSpacing={isMobile ? 8 : 16}>
          {data.map((v) => {
            return isMobile && !v.itemNumber ? undefined : (
              <Grid item xs={12} md={6}>
                <Grid container alignItems="center">
                  <Grid item xs={4} md={1.5}>
                    <Typography
                      variant="h1"
                      fontSize={isMobile ? pxToRem(124) : pxToRem(200)}
                      color="#101549"
                      sx={{
                        textShadow:
                          "-6px -6px 8px rgba(255, 255, 255, 0.1), -2px -2px 2px rgba(255, 255, 255, 0.05), 1px 1px 2px rgba(11, 13, 39, 0.25), 8px 4px 12px rgba(11, 13, 39, 0.25)",
                      }}
                    >
                      {v.itemNumber}
                    </Typography>
                  </Grid>
                  <Grid item xs={8} md={10.5}>
                    <Typography variant="subtitle1">{v.description}</Typography>
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
