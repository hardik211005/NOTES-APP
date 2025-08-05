// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    // Agar token nahi milta, login pe redirect
    return <Navigate to="/login" replace />;
  }
  // Agar token mil gaya to children component render
  return children;
};

export default ProtectedRoute;
