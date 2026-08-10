const express = require("express");

const router = express.Router();

const adminController = require("../controllers/adminController");

const {
  verifyToken,
  verifyAdmin,
} = require("../middleware/roleMiddleware");

// ==========================================
// DASHBOARD
// ==========================================

router.get(
  "/dashboard",
  verifyToken,
  verifyAdmin,
  adminController.getDashboard
);

// ==========================================
// HOTELS
// ==========================================

router.get(
  "/hotels",
  verifyToken,
  verifyAdmin,
  adminController.getHotels
);

router.put(
  "/hotels/approve/:id",
  verifyToken,
  verifyAdmin,
  adminController.approveHotel
);

router.put(
  "/hotels/reject/:id",
  verifyToken,
  verifyAdmin,
  adminController.rejectHotel
);

router.put(
  "/hotels/deactivate/:id",
  verifyToken,
  verifyAdmin,
  adminController.deactivateHotel
);

router.put(
  "/hotels/block/:id",
  verifyToken,
  verifyAdmin,
  adminController.blockHotel
);

// ==========================================
// USERS
// ==========================================

router.get(
  "/users",
  verifyToken,
  verifyAdmin,
  adminController.getUsers
);

router.put(
  "/users/role/:id",
  verifyToken,
  verifyAdmin,
  adminController.changeUserRole
);

router.put(
  "/users/activate/:id",
  verifyToken,
  verifyAdmin,
  adminController.activateUser
);

router.put(
  "/users/deactivate/:id",
  verifyToken,
  verifyAdmin,
  adminController.deactivateUser
);

router.put(
  "/users/block/:id",
  verifyToken,
  verifyAdmin,
  adminController.blockUser
);

router.delete(
  "/users/:id",
  verifyToken,
  verifyAdmin,
  adminController.deleteUser
);

// ==========================================
// UPDATE ADMIN PROFILE
// ==========================================

router.put(
  "/users/profile/:id",
  verifyToken,
  verifyAdmin,
  adminController.updateProfile
);

// ==========================================
// CHANGE ADMIN PASSWORD
// ==========================================

router.put(
  "/change-password",
  verifyToken,
  verifyAdmin,
  adminController.changePassword
);

module.exports = router;