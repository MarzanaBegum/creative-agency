import React from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  learnMoreBtn: {
    "&.MuiButton-root": {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 33,
      padding: "0 30px",
    },
  },
});

const CarouselItem = (props) => {
  const classes = useStyles();
  const { title, img } = props.item;
  return (
    <Card
      sx={{ display: { md: "flex" }, marginBottom: "30px", boxShadow: "none" }}
    >
      <CardMedia
        component="img"
        sx={{ width: { md: 400 }, objectFit: { xs: "fill" } }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ marginLeft: { md: "7px" } }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.learnMoreBtn}>Learn More</Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CarouselItem;
