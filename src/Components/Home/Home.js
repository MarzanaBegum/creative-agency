import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Services from "./Services/Services";
import ParentsFeedback from "./ParentsFeedback/ParentsFeedback";
import OurTeachers from "./OurTeachers/OurTeachers";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Services />
      <ParentsFeedback />
      <OurTeachers />
      <Footer />
    </>
  );
};

export default Home;
