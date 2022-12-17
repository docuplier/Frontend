import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box p={8} width="100%">
      <Typography variant="body2" textAlign="center">
        All right reserved {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
