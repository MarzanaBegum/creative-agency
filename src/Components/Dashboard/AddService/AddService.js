import React, { useState } from "react";
import { TextareaAutosize, FormGroup, TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

const AddService = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      const response = await fetch("http://localhost:5000/service/addService", {
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
      <FormGroup sx={{ marginBottom: "10px" }}>
        <TextField
          label="Service title"
          variant="standard"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
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

export default AddService;
