import { Box, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";

const Layout = () => {
  return (
    <Box>
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
