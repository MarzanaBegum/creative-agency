import React from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import carousel1 from "../../../Images/carousel1.jpg";
import carousel2 from "../../../Images/carousel2.jpg";
import CarouselItem from "./CarouselItem";

const carouselData = [
  {
    title: "Games & Sports",
    img: carousel1,
  },
  {
    title: "Drawing & Painting",
    img: carousel2,
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Grid container sx={{ mt: "70px", justifyContent: "center" }}>
      <Grid item xs={11} sm={6} md={11}>
        <Slider {...settings}>
          {carouselData.map((item) => (
            <CarouselItem item={item} key={item.title} />
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default Carousel;
