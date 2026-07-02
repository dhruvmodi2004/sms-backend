const router = require("express").Router();


const {
    register,
    login
} = require("../controllers/authController");


const validateUser = require("../validators/userValidator");



router.post(
    "/register",
    validateUser,
    register
);


router.post(
    "/login",
    login
);



module.exports = router;