import {
  Toolbar,
  Box,
  CssBaseline,
  AppBar,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useAuth } from "../Context/AuthContext";

const drawerWidth = 240;

const Dashboard = () => {
  const { data } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [admins, setAdmins] = useState([]);
  const isAdmin = admins.find((admin) => admin?.email === data?.email);

  useEffect(() => {
    fetch("http://localhost:5000/admin/allAdmins")
      .then((res) => res.json())
      .then((result) => setAdmins(result));
  }, [admins]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Typography variant="h6" component="div">
            {data.displayName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <SideBar
          mobileOpen={mobileOpen}
          isAdmin={isAdmin}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
