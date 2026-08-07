const db = require("../config/db");

// ==========================================
// ADMIN DASHBOARD DATA
// ==========================================

exports.getDashboard = async (req, res) => {
  try {
    // Total Hotels

    const [hotels] = await db.promise().query(
      `
            SELECT COUNT(*) AS totalHotels
            FROM hotels
            `,
    );

    // Total Rooms

    const [rooms] = await db.promise().query(
      `
            SELECT COUNT(*) AS totalRooms
            FROM rooms
            `,
    );

    // Total Customers

    const [users] = await db.promise().query(
      `
            SELECT COUNT(*) AS totalUsers
            FROM users
            WHERE Role='Customer'
            `,
    );

    // Total Bookings

    const [bookings] = await db.promise().query(
      `
            SELECT COUNT(*) AS totalBookings
            FROM bookings
            `,
    );

    // Total Revenue

    const [revenue] = await db.promise().query(
      `
            SELECT IFNULL(SUM(amount),0) AS totalRevenue
            FROM payments
            `,
    );

    // Occupied Rooms

    const [occupiedRooms] = await db.promise().query(
      `
            SELECT COUNT(*) AS occupiedRooms
            FROM rooms
            WHERE Status='Occupied'
            `,
    );

    res.status(200).json({
      success: true,

      data: {
        totalHotels: hotels[0].totalHotels,

        totalRooms: rooms[0].totalRooms,

        totalUsers: users[0].totalUsers,

        totalBookings: bookings[0].totalBookings,

        totalRevenue: revenue[0].totalRevenue,

        occupiedRooms: occupiedRooms[0].occupiedRooms,
      },
    });
  } catch (error) {
    console.log("Admin Dashboard Error:", error);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// GET ALL HOTELS
// ==========================================

exports.getHotels = async (req, res) => {
  try {
    const [hotels] = await db.promise().query(
      `
            SELECT 
            HotelID,
            HotelName,
            OwnerName,
            Email,
            Phone,
            Address,
            Status
            FROM hotels
            ORDER BY HotelID DESC
            `,
    );

    res.json({
      success: true,
      hotels,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// APPROVE HOTEL
// ==========================================

exports.approveHotel = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `
            UPDATE hotels
            SET Status='Approved'
            WHERE HotelID=?
            `,
      [id],
    );

    res.json({
      success: true,
      message: "Hotel Approved",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// REJECT HOTEL
// ==========================================

exports.rejectHotel = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `
            UPDATE hotels
            SET Status='Rejected'
            WHERE HotelID=?
            `,
      [id],
    );

    res.json({
      success: true,
      message: "Hotel Rejected",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// GET ALL USERS
// ==========================================

exports.getUsers = async (req, res) => {
  try {
    const [users] = await db.promise().query(
      `
            SELECT 
            UserID,
            FirstName,
            LastName,
            Email,
            Phone,
            Role
            FROM users
            `,
    );

    res.json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// GET STAFF
// ==========================================

exports.getStaff = async (req, res) => {
  try {
    const [staff] = await db.promise().query(
      `
            SELECT
            UserID,
            FirstName,
            LastName,
            Email,
            Phone,
            Role,
            HotelID
            FROM users
            WHERE Role IN ('Manager','Receptionist')
            `,
    );

    res.json({
      success: true,
      staff,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// DELETE USER
// ==========================================

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query("DELETE FROM users WHERE UserID=?", [id]);

    res.json({
      success: true,
      message: "User Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
