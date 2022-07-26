import React from "react";
import { Card, Typography, Avatar, CardContent, Button } from "@mui/material";

const DashboardServiceCard = (props) => {
  const { description, avatar } = props.book;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent style={{ display: "flex" }}>
        <Avatar
          alt="Remy Sharp"
          src={`http://localhost:5000/uploads/avatars/${avatar}`}
        />

        <Button sx={{ marginLeft: "auto" }} variant="contained">
          Pending
        </Button>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardServiceCard;
