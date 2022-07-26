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

const DashboardServiceTable = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/book/allBooking")
      .then((res) => res.json())
      .then((result) => setBook(result));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Service Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {book.map((book) => (
            <TableRow
              key={book._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {book.name}
              </TableCell>
              <TableCell align="right">{book.email}</TableCell>
              <TableCell align="right">{book.title}</TableCell>
              <TableCell align="right">{book.price}</TableCell>
              <TableCell align="right">
                <Button>Pending</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardServiceTable;
