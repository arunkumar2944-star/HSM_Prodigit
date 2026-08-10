const db = require("../config/db");

// ==============================
// UPDATE PROFILE
// ==============================
exports.updateProfile = async (req, res) => {
    const { id } = req.params;

    console.log("=================================");
    console.log("UPDATE PROFILE REQUEST");
    console.log("USER ID:", id);
    console.log("REQUEST BODY:", req.body);
    console.log("=================================");

    const {
        FirstName,
        LastName,
        Email,
        Phone,
        Gender,
        DateOfBirth,
        ProfileImage
    } = req.body;

    try {
        // Check user ID
        if (!id || id === "undefined") {
            return res.status(400).json({
                success: false,
                message: "User ID is missing"
            });
        }

        // Convert empty DOB to NULL
        const dob =
            DateOfBirth && DateOfBirth.trim() !== ""
                ? DateOfBirth
                : null;

        const sql = `
            UPDATE users
            SET
                FirstName = ?,
                LastName = ?,
                Email = ?,
                Phone = ?,
                Gender = ?,
                DateOfBirth = ?,
                ProfileImage = ?,
                UpdatedAt = CURRENT_TIMESTAMP
            WHERE UserID = ?
        `;

        const values = [
            FirstName || null,
            LastName || null,
            Email || null,
            Phone || null,
            Gender || null,
            dob,
            ProfileImage || null,
            id
        ];

        console.log("SQL:", sql);
        console.log("VALUES:", values);

        // IMPORTANT:
        // Actually execute the UPDATE query
        const [result] = await db.promise().query(sql, values);

        console.log("UPDATE RESULT:", result);

        // Check whether a user was actually found
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found or no data was updated"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            affectedRows: result.affectedRows
        });

    } catch (error) {

        console.log("=================================");
        console.log("UPDATE ERROR FULL:", error);
        console.log("ERROR MESSAGE:", error.message);
        console.log("=================================");

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};