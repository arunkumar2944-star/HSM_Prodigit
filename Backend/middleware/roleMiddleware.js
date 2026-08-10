const jwt = require("jsonwebtoken");

// ==========================================
// VERIFY TOKEN
// ==========================================

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

// ==========================================
// ADMIN ROLE CHECK
// ==========================================

exports.verifyAdmin = (req, res, next) => {
  const role = (req.user.role || req.user.Role || "").toLowerCase();

  if (role !== "admin") {
    return res.status(403).json({
      message: "Admin access only",
      currentRole: role,
    });
  }

  next();
};

// ==========================================
// HOTEL MANAGER ROLE CHECK
// ==========================================

exports.verifyManager = (req, res, next) => {
  const role = (req.user.role || req.user.Role || "").toLowerCase();

  if (role !== "manager" && role !== "hotelmanager") {
    return res.status(403).json({
      message: "Manager access only",
      currentRole: role,
    });
  }

  next();
};
