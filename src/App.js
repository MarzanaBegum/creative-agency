import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Book from "./Components/Dashboard/Book/Book";
import Home from "./Components/Home/Home";
import ServiceList from "./Components/Dashboard/DashboardService/DashboardService";
import AddService from "./Components/Dashboard/AddService/AddService";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/Dashboard/ManageServices/ManageServices";
import Review from "./Components/Dashboard/Review/Review";
import NotMatch from "./Components/NotMatch/NotMatch";
import { AuthProvider } from "./Components/Context/AuthContext";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Book />} />
              <Route path="book" element={<Book />} />
              <Route path="service-list" element={<ServiceList />} />
              <Route path="review" element={<Review />} />
              <Route path="add-service" element={<AddService />} />
              <Route path="make-admin" element={<MakeAdmin />} />
              <Route path="manage-services" element={<ManageServices />} />
              <Route path="*" element={<NotMatch />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
