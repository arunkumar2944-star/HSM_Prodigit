require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Routes
const authRoutes = require("./routes/authrout");
const hotelRoutes = require("./routes/hotelRoutes");
const adminRoutes = require("./routes/adminRouts");

// Database
const db = require("./config/db");

const app = express();

// ===============================
// Middleware
// ===============================

app.use(cors());

app.use(express.json());

// ===============================
// API ROUTES
// ===============================

app.use("/api/auth", authRoutes);

app.use("/api/hotel", hotelRoutes);

app.use("/api/admin", adminRoutes);

// ===============================
// TEST API
// ===============================

app.get("/", (req, res) => {
  res.json({
    message: "Hotel Management API Running...",
  });
});

// ===============================
// DATABASE TEST
// ===============================

app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.promise().query("SELECT NOW() AS currentTime");

    res.json({
      success: true,

      data: rows,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,

      message: err.message,
    });
  }
});

// ===============================
// SERVER START
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
