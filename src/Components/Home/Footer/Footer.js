import { Grid, Box } from "@mui/material";
import React from "react";
import "./Footer.css";
import OurProgram from "./OurProgram/OurProgram";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        backgroundColor="text.secondary"
        color="white"
      >
        <Grid container sx={{ justifyContent: "center" }} spacing={3}>
          <Grid item xs={12} sm={3} md={4}>
            <div className="opening-hours">
              <h3>Opening Hours</h3>
              <span>Sunday - Friday</span>
              <br />
              <span>08 am - 05 pm</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <OurProgram />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className="contact-detail">
              <h3>55 Main Street, New York</h3>
              <h4>+012 (345) 678</h4>
            </div>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 6 }} pb={{ xs: 5, sm: 0 }}>
          <p>&copy;Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
