import React, { useState } from "react";
import { TextareaAutosize, FormGroup, TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

const Review = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("profession", profession);
      formData.append("description", description);
      formData.append("image", image);

      const response = await fetch("https://thawing-island-50607.herokuapp.com/review/addReview", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <FormGroup sx={{ marginBottom: "6px" }}>
        <TextField
          label="Your name"
          variant="standard"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup sx={{ marginBottom: "6px" }}>
        <TextField
          label="Your profession"
          variant="standard"
          name="profession"
          onChange={(e) => setProfession(e.target.value)}
        />
      </FormGroup>
      <FormGroup sx={{ marginBottom: "6px" }}>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          sx={{ width: 200 }}
        />
      </FormGroup>
      <FormGroup sx={{ marginBottom: "6px" }}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Button variant="outlined" startIcon={<CloudUploadIcon />}>
            Upload
          </Button>
        </label>
      </FormGroup>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Review;
