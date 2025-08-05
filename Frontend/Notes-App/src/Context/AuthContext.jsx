import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check for token on component mount
  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    if (token) {
      setIsAuthenticated(true);
      // You can decode the token here to get user info if needed
      // For now, we'll set a basic user object
      setUser({
        name: "User",
        email: "user@example.com"
      });
    }
  }, []);

  const login = (token, userData = null) => {
    localStorage.setItem("Authorization", token);
    setIsAuthenticated(true);
    if (userData) {
      setUser(userData);
    } else {
      setUser({
        name: "User",
        email: "user@example.com"
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("Authorization");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// isse tum Navbar se useAuth() call kar sakte ho
export const useAuth = () => useContext(AuthContext);
