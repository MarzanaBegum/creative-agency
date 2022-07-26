import { Drawer, List, Toolbar, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import GeneralServiceList from "./GeneralServiceList";
import AdminServiceList from "./AdminServiceList";
import { useAuth } from "../Context/AuthContext";

const drawerWidth = 240;

const SideBar = (props) => {
  const { data } = useAuth();
  const { mobileOpen, handleDrawerToggle, isAdmin } = props;
  const generalServices = ["Book", "Service List", "Review"];
  const adminService = ["Add Service", "Make Admin", "Manage Services"];
  const navigate = useNavigate();

  const handleMenuClick = (pageURL) => {
    handleDrawerToggle();
    navigate(`/dashboard/${pageURL}`);
  };
  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {data.email && (
            <GeneralServiceList
              generalServices={generalServices}
              handleMenuClick={handleMenuClick}
            />
          )}
          {isAdmin && (
            <AdminServiceList
              adminService={adminService}
              handleMenuClick={handleMenuClick}
            />
          )}
        </List>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <Toolbar />
        <Divider />
        <List>
          {data.email && (
            <GeneralServiceList
              generalServices={generalServices}
              handleMenuClick={handleMenuClick}
            />
          )}
          {isAdmin && (
            <AdminServiceList
              adminService={adminService}
              handleMenuClick={handleMenuClick}
            />
          )}
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
