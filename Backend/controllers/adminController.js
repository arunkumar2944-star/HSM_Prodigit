const db = require("../config/db");
const bcrypt = require("bcrypt");

// ==========================================
// ADMIN DASHBOARD
// ==========================================

exports.getDashboard = async (req, res) => {
  try {
    const [hotels] = await db.promise().query(
      `
    SELECT COUNT(*) AS totalHotels
    FROM hotels
    `,
    );

    const [users] = await db.promise().query(
      `
    SELECT COUNT(*) AS totalUsers
    FROM users
    `,
    );

    res.json({
      success: true,

      data: {
        totalHotels: hotels[0].totalHotels,
        totalUsers: users[0].totalUsers,
      },
    });
  } catch (error) {
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
SELECT *
FROM hotels
ORDER BY id DESC
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
// HOTEL APPROVE
// ==========================================

exports.approveHotel = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `
UPDATE hotels
SET status='Approved'
WHERE id=?
`,

      [id],
    );

    res.json({
      success: true,

      message: "Hotel Approved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// HOTEL REJECT
// ==========================================

exports.rejectHotel = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `
UPDATE hotels
SET status='Rejected'
WHERE id=?
`,

      [id],
    );

    res.json({
      success: true,

      message: "Hotel Rejected Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// HOTEL BLOCK
// ==========================================

exports.blockHotel = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `
UPDATE hotels
SET status='Blocked'
WHERE id=?
`,

      [id],
    );

    res.json({
      success: true,

      message: "Hotel Blocked Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// HOTEL DEACTIVATE
// ==========================================

exports.deactivateHotel = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `
UPDATE hotels
SET status='Deactivated'
WHERE id=?
`,

      [id],
    );

    res.json({
      success: true,

      message: "Hotel Deactivated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// ==========================================
// GET ALL USERS WITH HOTEL NAME
// ==========================================

exports.getUsers = async (req, res) => {
  try {
    const [users] = await db.promise().query(
      `
SELECT

u.UserID,
u.FirstName,
u.LastName,
u.Email,
u.Phone,
u.Role,
u.IsActive,
u.CreatedAt,
u.hotel_id,

h.hotelName


FROM users u


LEFT JOIN hotels h

ON u.hotel_id = h.id


ORDER BY u.UserID DESC

`,
    );

    res.json({
      success: true,

      users,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// CHANGE USER ROLE
// ==========================================

exports.changeUserRole = async (req, res) => {
  try {
    const { id } = req.params;

    const { role } = req.body;

    await db.promise().query(
      `
UPDATE users

SET Role=?

WHERE UserID=?

`,

      [role, id],
    );

    res.json({
      success: true,

      message: "User Role Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// ACTIVATE USER
// ==========================================

exports.activateUser = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `
UPDATE users

SET IsActive=1

WHERE UserID=?

`,

      [id],
    );

    res.json({
      success: true,

      message: "User Activated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// DEACTIVATE USER
// ==========================================

exports.deactivateUser = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `
UPDATE users

SET IsActive=0

WHERE UserID=?

`,

      [id],
    );

    res.json({
      success: true,

      message: "User Deactivated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// BLOCK USER
// ==========================================

exports.blockUser = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `
UPDATE users

SET IsActive=0

WHERE UserID=?

`,

      [id],
    );

    res.json({
      success: true,

      message: "User Blocked Successfully",
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

    await db.promise().query(
      `
DELETE FROM users

WHERE UserID=?

`,

      [id],
    );

    res.json({
      success: true,

      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
// ==========================================
// UPDATE PROFILE
// ==========================================

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const { firstName, lastName, email, phone, dob, gender, profileImage } =
      req.body;

    await db.promise().query(
      `
UPDATE users
SET
FirstName=?,
LastName=?,
Email=?,
Phone=?,
DateOfBirth=?,
Gender=?,
ProfileImage=?,
UpdatedAt=CURRENT_TIMESTAMP

WHERE UserID=?

`,
      [firstName, lastName, email, phone, dob, gender, profileImage, id],
    );

    res.json({
      success: true,

      message: "Profile Updated Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// CHANGE ADMIN PASSWORD
// ==========================================

exports.changePassword = async (req, res) => {
  try {
    console.log("========== CHANGE PASSWORD ==========");
    console.log("REQ.USER:", req.user);

    const { currentPassword, newPassword } = req.body;

    // ------------------------------------------
    // VALIDATE REQUEST
    // ------------------------------------------

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Current password and new password are required",
      });
    }

    // ------------------------------------------
    // GET LOGGED-IN USER ID
    // ------------------------------------------

    const userId = req.user?.UserID || req.user?.userId || req.user?.id;

    console.log("USER ID:", userId);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Admin login required.",
      });
    }

    // ------------------------------------------
    // GET USER
    // ------------------------------------------

    const [users] = await db.promise().query(
      `
      SELECT
        UserID,
        PasswordHash,
        Role,
        IsActive
      FROM users
      WHERE UserID = ?
      LIMIT 1
      `,
      [userId],
    );

    console.log("USER FROM DATABASE:", users);

    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admin user not found.",
      });
    }

    const user = users[0];

    // ------------------------------------------
    // CHECK PASSWORD HASH
    // ------------------------------------------

    if (!user.PasswordHash) {
      return res.status(500).json({
        success: false,
        message: "Password information is missing for this account.",
      });
    }

    // ------------------------------------------
    // CHECK CURRENT PASSWORD
    // ------------------------------------------

    const passwordMatch = await bcrypt.compare(
      currentPassword,
      user.PasswordHash,
    );

    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect.",
      });
    }

    // ------------------------------------------
    // CHECK NEW PASSWORD
    // ------------------------------------------

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters.",
      });
    }

    if (!/[A-Z]/.test(newPassword)) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least one uppercase letter.",
      });
    }

    if (!/[a-z]/.test(newPassword)) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least one lowercase letter.",
      });
    }

    if (!/\d/.test(newPassword)) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least one number.",
      });
    }

    if (!/[@$!%*?&]/.test(newPassword)) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least one special character.",
      });
    }

    // ------------------------------------------
    // CHECK NEW PASSWORD IS DIFFERENT
    // ------------------------------------------

    const samePassword = await bcrypt.compare(newPassword, user.PasswordHash);

    if (samePassword) {
      return res.status(400).json({
        success: false,
        message: "New password must be different from current password.",
      });
    }

    // ------------------------------------------
    // HASH NEW PASSWORD
    // ------------------------------------------

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // ------------------------------------------
    // UPDATE DATABASE
    // ------------------------------------------

    await db.promise().query(
      `
      UPDATE users
      SET PasswordHash = ?
      WHERE UserID = ?
      `,
      [hashedPassword, userId],
    );

    console.log("PASSWORD UPDATED SUCCESSFULLY FOR USER:", userId);

    // ------------------------------------------
    // SUCCESS
    // ------------------------------------------

    return res.status(200).json({
      success: true,
      message: "Password changed successfully.",
    });
  } catch (error) {
    console.error("========== CHANGE PASSWORD ERROR ==========");

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to change password.",
      error: error.message,
    });
  }
};
