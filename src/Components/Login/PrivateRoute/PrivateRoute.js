import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const PrivateRoute = () => {
  const location = useLocation();
  const { data } = useAuth();
  return data.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
