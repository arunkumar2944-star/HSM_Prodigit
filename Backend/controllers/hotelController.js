const bcrypt = require("bcrypt");
const db = require("../config/db");

// ==========================================
// HOTEL REGISTER + HOTEL MANAGER CREATE
// ==========================================

exports.registerHotel = async (req, res) => {
  console.log("Hotel Register API Called");

  let connection;

  try {
    connection = await db.promise().getConnection();

    const {
      // HOTEL DETAILS

      hotelName,
      hotelEmail,
      hotelPhone,
      hotelCategory,

      // OWNER DETAILS

      ownerName,
      ownerEmail,

      // MANAGER DETAILS

      managerName,
      managerEmail,
      managerPhone,

      // ADDRESS

      address,
      city,
      state,
      pincode,

      password,
    } = req.body;

    if (
      !hotelName ||
      !hotelEmail ||
      !managerName ||
      !managerEmail ||
      !password
    ) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    await connection.beginTransaction();

    // =================================
    // INSERT HOTEL
    // =================================

    const [hotelResult] = await connection.query(
      `
        INSERT INTO hotels
        (

            hotelName,
            hotelEmail,
            hotelPhone,
            hotelCategory,

            ownername,
            ownerEmail,

            address,
            city,
            state,
            pincode,

            role

        )

        VALUES(?,?,?,?,?,?,?,?,?,?,?)

        `,

      [
        hotelName,

        hotelEmail,

        hotelPhone,

        hotelCategory,

        ownerName,

        ownerEmail,

        address,

        city,

        state,

        pincode,

        "Hotel",
      ],
    );

    const hotelId = hotelResult.insertId;

    // =================================
    // CREATE MANAGER
    // =================================

    const hashedPassword = await bcrypt.hash(
      password,

      10,
    );

    const nameParts = managerName.trim().split(" ");

    const firstName = nameParts[0];

    const lastName = nameParts.slice(1).join(" ");

    await connection.query(
      `
        INSERT INTO users
        (

            FirstName,

            LastName,

            Email,

            Phone,

            PasswordHash,

            Role,

            hotel_id,

            IsActive,

            CreatedAt

        )

        VALUES(?,?,?,?,?,?,?,?,NOW())

        `,

      [
        firstName,

        lastName,

        managerEmail,

        managerPhone || hotelPhone,

        hashedPassword,

        "HotelManager",

        hotelId,

        1,
      ],
    );

    await connection.commit();

    res.status(201).json({
      success: true,

      message: "Hotel and Manager registered successfully",

      hotelId: hotelId,
    });
  } catch (error) {
    console.log("Hotel Register Error:", error);

    if (connection) {
      await connection.rollback();
    }

    res.status(500).json({
      success: false,

      message: error.message,
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
};
