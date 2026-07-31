
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authrout");
const db = require("./config/db");


const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hotel Management API Running...");
});


app.get("/test-db", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT NOW() AS currentTime");

        res.json({
            success: true,
            data: rows
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
