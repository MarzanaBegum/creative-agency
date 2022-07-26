import React, { useState, useEffect } from "react";
import {
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  async function handleDeleteService(serviceId) {
    await fetch(`http://localhost:5000/service/delete/${serviceId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          console.log("Delete Successfull!");
        }
      });
  }

  useEffect(() => {
    fetch("http://localhost:5000/service/allServices")
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, [services]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Service Title</TableCell>
            <TableCell align="center">Service Description</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service) => (
            <TableRow
              key={service._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {service.title}
              </TableCell>
              <TableCell align="center">{service.description}</TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => handleDeleteService(service._id)}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageServices;
