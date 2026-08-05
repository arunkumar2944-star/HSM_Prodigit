const express = require("express");

const router = express.Router();

const {
    registerHotel
} = require("../controllers/hotelController");


// POST /api/hotel/register

router.post(
    "/register",
    registerHotel
);


module.exports = router;