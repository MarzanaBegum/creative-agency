import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Grid } from "@mui/material";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://thawing-island-50607.herokuapp.com/service/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <section className="services-container">
      <h1>Our Awesome Services</h1>
      <Grid container sx={{ justifyContent: "center" }}>
        {services.map((service) => (
          <Grid item xs={8} sm={6} md={4} lg={3} xl={3} key={service._id}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Services;
