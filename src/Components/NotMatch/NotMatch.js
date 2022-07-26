import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    color: "purple",
  },
});

const NotMatch = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>404!Your Request Content Was Not Found.....</h3>
    </div>
  );
};

export default NotMatch;
