const express = require("express");

const router = express.Router();


const adminController = require("../controllers/adminController");

const {verifyToken,verifyAdmin}=require("../middleware/roleMiddleware");



// Dashboard

router.get(
"/dashboard",
verifyToken,
verifyAdmin,
adminController.getDashboard
);




// Hotels

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




// Users

router.get(
"/users",
verifyToken,
verifyAdmin,
adminController.getUsers
);



router.delete(
"/users/:id",
verifyToken,
verifyAdmin,
adminController.deleteUser
);




// Staff

router.get(
"/staff",
verifyToken,
verifyAdmin,
adminController.getStaff
);



module.exports=router;