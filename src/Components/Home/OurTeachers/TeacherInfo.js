import React from "react";
import {
  Card,
  CardMedia,
  Button,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

const TeacherInfo = (props) => {
  const { name, img } = props.teacher;

  return (
    <Card
      sx={{
        margin: "9px",
      }}
      elevation={6}
    >
      <CardMedia
        component="img"
        height="180"
        image={img}
        alt="teacher image"
        sx={{ objectFit: "fill" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default TeacherInfo;
