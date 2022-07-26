import React, { useState } from "react";
import { FormGroup, TextField, Button } from "@mui/material";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/admin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email: admin }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup sx={{ marginBottom: "6px" }}>
        <TextField
          label="Enter email"
          variant="standard"
          name="email"
          onChange={(e) => setAdmin(e.target.value)}
        />
      </FormGroup>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default MakeAdmin;
