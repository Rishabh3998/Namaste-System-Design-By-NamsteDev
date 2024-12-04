import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Created an HOC that will check for protected routes and handles the routing.
const ProtectedRoute = () => {
  // Write Authentication logic
  // Make login api call, check if token is valid, set the state to true if valid
  // BTW this is a very bad way of implementing protected routes
  const [isAuthSuccess] = useState(true);

  // We have to use Outlet to render child routes, it is a place where children gets rendered
  return isAuthSuccess ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
