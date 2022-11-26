import { Box, Button, Grid } from "@mui/material";
import { FC } from "react";

export interface ITabButtonsProps {
  activeTab: number;
  isMobile?: boolean;
  data: { id: number; name: string }[];
}

const TabButtons: FC<ITabButtonsProps> = ({ activeTab, isMobile, data }) => {
  return (
    <Box
      height={64}
      px={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        background: (theme) => theme.palette.action.disabledBackground,
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={isMobile ? 4 : 14}>
        {data.map((v) => (
          <Grid item xs={12 / data.length} key={v.id}>
            <Button
              variant={v.id === activeTab ? "contained" : "text"}
              fullWidth
              sx={{ maxWidth: 156, color: "#fff" }}
            >
              {v.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TabButtons;
