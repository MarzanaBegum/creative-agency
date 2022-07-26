import React from "react";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GridViewIcon from "@mui/icons-material/GridView";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

const AdminServiceList = (props) => {
  const { adminService, handleMenuClick } = props;
  return (
    <>
      {adminService.map((service, index) => (
        <ListItem
          key={service}
          disablePadding
          onClick={() =>
            handleMenuClick(service.toLowerCase().split(" ").join("-"))
          }
        >
          <ListItemButton>
            {index === 0 && (
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
            )}
            {index === 1 && (
              <ListItemIcon>
                <PersonAddAltIcon />
              </ListItemIcon>
            )}
            {index === 2 && (
              <ListItemIcon>
                <GridViewIcon />
              </ListItemIcon>
            )}
            <ListItemText primary={service} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default AdminServiceList;
