import React, { useState } from "react";
import { TextareaAutosize, FormGroup, TextField, Button } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const { data } = useAuth();
  const [price, setPrice] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const orderObject = {
      name: data?.displayName,
      email: data?.email,
      title: data?.service.title,
      description: data?.service.description,
      price: price,
      avatar: data?.service.avatar,
    };
    try {
      const response = await fetch("http://localhost:5000/book/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderObject),
      });
      const result = await response.json();
      navigate("/dashboard/service-list");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup sx={{ marginBottom: "6px" }}>
        <TextField
          label="Your name/Company name"
          name="name"
          defaultValue={data?.displayName}
          variant="standard"
        />
      </FormGroup>
      <FormGroup sx={{ marginBottom: "6px" }}>
        <TextField
          label="Your email address"
          variant="standard"
          name="email"
          defaultValue={data?.email}
        />
      </FormGroup>
      <FormGroup sx={{ marginBottom: "10px" }}>
        <TextField
          label="Service title"
          variant="standard"
          name="title"
          defaultValue={data.service?.title}
        />
      </FormGroup>
      <FormGroup sx={{ marginBottom: "6px" }}>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Project Details"
          name="description"
          sx={{ width: 200 }}
          defaultValue={data.service?.description}
        />
      </FormGroup>
      <FormGroup sx={{ marginBottom: "6px" }}>
        <TextField
          label="Price"
          variant="standard"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default Order;
