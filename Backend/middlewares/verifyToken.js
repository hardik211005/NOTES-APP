import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  console.log("Headers received:", req.headers);
  console.log("Authorization header:", req.headers.authorization);
  
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("No authorization header or invalid format");
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }

  const token = authHeader.split(" ")[1];
  console.log("Token extracted:", token ? token.substring(0, 20) + "..." : "No token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decoded successfully:", decoded);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.log("Token verification failed:", error.message);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
