const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // ⬅️ Important: Extract token after "Bearer"

  if (!token) return res.status(401).json({ message: "Access Denied: No Token Provided" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = verifyToken;
