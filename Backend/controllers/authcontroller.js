const bcrypt = require("bcrypt");
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
            role
        } = req.body;



        const existingUser = await findUserByEmail(email);



        if (existingUser) {

            return res.status(400).json({

                message: "Email already exists"

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
            role

        );



        res.status(201).json({

            message: "User Registered Successfully",

            user: user

        });



    }
    catch (error) {

        console.log(error);


        res.status(500).json({

            message: error.message

        });


    }

};





// =================================================
// LOGIN
// =================================================


exports.login = async (req, res) => {


    try {


        const {
            email,
            password
        } = req.body;



        // ================= USER LOGIN =================


        const userQuery = `

        SELECT *

        FROM users

        WHERE email=?

        `;



        db.query(userQuery, [email], async (err, users) => {


            if (err) {

                return res.status(500).json({

                    message: "Database error"

                });

            }




            if (users.length > 0) {


                const user = users[0];


                console.log("USER DATA:", user);
                if (!user.PasswordHash) {

                    return res.status(500).json({
                        message: "PasswordHash missing in users table"
                    });
                }
                const passwordMatch = await bcrypt.compare(
                    password,
                    user.PasswordHash
                );
                if (!passwordMatch) {

                    return res.status(401).json({
                        message: "Invalid password"
                    });
                }
                return res.json({

                    message: "Login successful",

                    user: {

                        id: user.id,
                        name: user.firstname,
                        email: user.email,
                        role: user.role
                    }
                });
            }

            // ================= HOTEL LOGIN =================



            const hotelQuery = `

            SELECT *

            FROM hotels

            WHERE hotelEmail=?

            `;



            db.query(hotelQuery, [email], async (err, hotels) => {



                if (err) {


                    return res.status(500).json({

                        message: "Database error"

                    });


                }





                if (hotels.length === 0) {


                    return res.status(401).json({

                        message: "Email not found"

                    });


                }





                const hotel = hotels[0];



                console.log("HOTEL DATA:", hotel);



                if (!hotel.password) {


                    return res.status(500).json({

                        message: "Hotel password missing"

                    });


                }





                const passwordMatch = await bcrypt.compare(

                    password,

                    hotel.password

                );





                if (!passwordMatch) {


                    return res.status(401).json({

                        message: "Invalid password"

                    });


                }





                return res.json({


                    message: "Hotel Login successful",


                    user: {


                        id: hotel.id,

                        name: hotel.hotelName,

                        email: hotel.hotelEmail,

                        role: hotel.role || "Manager"


                    }


                });



            });



        });



    }

    catch (error) {


        console.log(error);



        res.status(500).json({

            message: error.message

        });



    }



};