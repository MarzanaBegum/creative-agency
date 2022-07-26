import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RateReviewIcon from "@mui/icons-material/RateReview";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const GeneralServiceList = (props) => {
  const { generalServices, handleMenuClick } = props;
  return (
    <>
      {generalServices.map((generalService, index) => (
        <ListItem
          key={generalService}
          disablePadding
          onClick={() =>
            handleMenuClick(generalService.toLowerCase().split(" ").join("-"))
          }
        >
          <ListItemButton>
            {index === 0 && (
              <ListItemIcon>
                <AddShoppingCartIcon />
              </ListItemIcon>
            )}
            {index === 1 && (
              <ListItemIcon>
                <HomeRepairServiceIcon />
              </ListItemIcon>
            )}
            {index === 2 && (
              <ListItemIcon>
                <RateReviewIcon />
              </ListItemIcon>
            )}
            <ListItemText primary={generalService} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default GeneralServiceList;
