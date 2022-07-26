import React, { useState, useEffect } from "react";
import DashboardServiceCard from "./DashboardServiceCard";
import DashboardServiceTable from "./DashboardServiceTable";
import { useAuth } from "../../Context/AuthContext";
import noOrder from "../../../Images/noOrder.png";
import { Box } from "@mui/material";

const DashboardService = () => {
  const { data } = useAuth();
  const [booking, setBooking] = useState([]);
  const [admins, setAdmins] = useState([]);
  const isAdmin = admins.find((admin) => admin?.email === data?.email);

  useEffect(() => {
    fetch("http://localhost:5000/admin/allAdmins")
      .then((res) => res.json())
      .then((result) => setAdmins(result));
  }, [admins]);

  useEffect(() => {
    fetch("http://localhost:5000/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email }),
    })
      .then((res) => res.json())
      .then((result) => setBooking(result));
  }, [data.email]);

  return (
    <>
      {isAdmin ? (
        <DashboardServiceTable />
      ) : booking.length === 0 ? (
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <img
            src={noOrder}
            style={{ width: "100px", height: "100px" }}
            alt="NoOrder"
          />
          <h3 style={{ color: "purple" }}>There is no order!Order Now</h3>
        </Box>
      ) : (
        booking.map((book) => (
          <DashboardServiceCard book={book} key={book._id} />
        ))
      )}
    </>
  );
};

export default DashboardService;
