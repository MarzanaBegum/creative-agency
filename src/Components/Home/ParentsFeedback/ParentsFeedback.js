import React, { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";
import { Grid } from "@mui/material";
import "./ParentsFeedback.css";

const ParentsFeedback = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://thawing-island-50607.herokuapp.com/review/allReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return (
    <section className="feedback-container">
      <div className="feedback-header">
        <h3>Parents Feedback</h3>
        <h1>What Say Parents About Our Kindergardern</h1>
      </div>
      <Grid container sx={{ justifyContent: "center" }}>
        {reviews.map((review) => (
          <Grid item xs={8} sm={6} md={4} lg={3} xl={3} key={review._id}>
            <FeedbackCard review={review} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default ParentsFeedback;
