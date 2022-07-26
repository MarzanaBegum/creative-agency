import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const OurProgram = () => {
  const programName = [
    "Arts & Drawing",
    "Computer Engineering",
    "Digital Mathematics",
    "Physical Exercise",
    "Social Science",
  ];
  return (
    <List>
      <h3 className="program-header">Our Program</h3>
      {programName.map((item) => (
        <ListItem
          key={item}
          disablePadding
          sx={{
            marginBottom: "3px",
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ArrowForwardIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default OurProgram;
