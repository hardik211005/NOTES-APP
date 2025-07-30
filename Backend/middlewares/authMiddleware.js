// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // ✅ pure token string extract

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   req.user = { id: decoded.id }; // ✅ decoded token payload save kar lo
    next(); // ⏩ move to next middleware or controller
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
