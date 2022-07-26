import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const FeedbackCard = (props) => {
  const { name, profession, description, avatar } = props.review;
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "9px",
      }}
      elevation={6}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src={`http://localhost:5000/uploads/avatars/${avatar}`}
            sx={{ width: 56, height: 56, bgcolor: deepPurple[500] }}
          />
        }
        title={name}
        subheader={profession}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
