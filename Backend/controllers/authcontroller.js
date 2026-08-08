const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const { createUser, findUserByEmail } = require("../models/User");

// =================================================
// CUSTOMER REGISTER
// =================================================

exports.register = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      password,
      dateOfBirth,
      gender,
      address,
      role,
    } = req.body;

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await createUser(
      firstname,
      lastname,
      email,
      phone,
      passwordHash,
      dateOfBirth,
      gender,
      address,
      role,
    );

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =================================================
// LOGIN
// =================================================

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const query = `
      SELECT *
      FROM users
      WHERE Email = ?
      LIMIT 1
    `;

    db.query(query, [email], async (err, results) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Database error",
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          success: false,
          message: "Email not found",
        });
      }

      const user = results[0];

      if (!user.PasswordHash) {
        return res.status(500).json({
          success: false,
          message: "Password hash missing",
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.PasswordHash);

      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid password",
        });
      }

      const token = jwt.sign(
        {
          id: user.UserID,
          email: user.Email,
          role: user.Role,
          hotel_id: user.hotel_id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES_IN || "7d",
        },
      );

      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user.UserID,
          firstName: user.FirstName,
          lastName: user.LastName,
          email: user.Email,
          phone: user.Phone,
          role: user.Role,
          hotel_id: user.hotel_id,
          profileImage: user.ProfileImage,
          isActive: user.IsActive,
        },
      });
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const query = `
      SELECT *
      FROM users
    `;
    db.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database error",
        });
      }
      return res.status(200).json({
        success: true,
        users: results,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
