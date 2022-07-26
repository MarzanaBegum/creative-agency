import React from "react";
import {
  Card,
  CardMedia,
  Button,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Services.css";

const ServiceCard = (props) => {
  const { data, setData } = useAuth();
  const service = props.service;
  const navigate = useNavigate();

  const handleExploreNow = (service) => {
    setData({ ...data, service });
    navigate("/dashboard/book");
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "9px",
        textAlign: "center",
      }}
      elevation={6}
    >
      <CardMedia
        component="img"
        height="180"
        image={`${process.env.REACT_APP_IMAGE_URL}/${service.avatar}`}
        alt="green iguana"
        className="serviceImg"
        sx={{ objectFit: "fill" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => handleExploreNow(service)}
        >
          Explore Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
