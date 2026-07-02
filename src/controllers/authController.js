const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Register User
exports.register = async (req, res) => {

    try {

        const existingUser = await User.findOne({
            email: req.body.email
        });


        if (existingUser) {

            return res.status(400).json({
                message: "Email already registered"
            });

        }


        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        );


        const user = await User.create({

            name: req.body.name,

            email: req.body.email,

            password: hashedPassword

        });



        console.log("User saved in database:", user);



        res.status(201).json({

            message: "User registered successfully",

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }

        });



    } catch(error) {


        console.log(error);


        res.status(500).json({

            message: error.message

        });


    }

};





// Login User
exports.login = async (req, res) => {


    try {


        const user = await User.findOne({

            email: req.body.email

        });



        if (!user) {


            return res.status(404).json({

                message:"User not found"

            });


        }



        const passwordMatch = await bcrypt.compare(

            req.body.password,

            user.password

        );



        if (!passwordMatch) {


            return res.status(401).json({

                message:"Invalid password"

            });


        }



        const token = jwt.sign(

            {
                id:user._id
            },

            process.env.JWT_SECRET,

            {
                expiresIn:"1d"
            }

        );



        res.json({

            message:"Login successful",

            token:token

        });



    } catch(error) {


        console.log(error);


        res.status(500).json({

            message:error.message

        });


    }


};