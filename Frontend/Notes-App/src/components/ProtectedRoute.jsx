// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("Authorization");
  if (!token) {
    // Agar token nahi milta, login pe redirect
    return <Navigate to="/login" replace />;
  }
  // Agar token mil gaya to children component render
  return children;
};

export default ProtectedRoute;
