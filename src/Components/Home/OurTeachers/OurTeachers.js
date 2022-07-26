import React from "react";
import "./OurTeachers.css";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import TeacherInfo from "./TeacherInfo";
import teacher1 from "../../../Images/teacher1.jpg";
import teacher2 from "../../../Images/teacher2.jpg";
import teacher3 from "../../../Images/teacher3.jpg";
import teacher4 from "../../../Images/teacher4.jpg";

const teachersData = [
  {
    name: "Scott M. Fletcher",
    img: teacher1,
  },
  {
    name: "Roderick M. Neal",
    img: teacher2,
  },
  {
    name: "Patrick K. Carlson",
    img: teacher3,
  },
  {
    name: "Frank T. Norman",
    img: teacher4,
  },
];
const OurTeachers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Grid container className="teacher-container">
      <Grid item xs={11} sm={7} md={10}>
        <h2> Meet Our Teachers</h2>
        <Slider {...settings}>
          {teachersData.map((teacher) => (
            <TeacherInfo teacher={teacher} key={teacher.name} />
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default OurTeachers;
