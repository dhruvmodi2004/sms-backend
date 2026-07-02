const router = require("express").Router();


const {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent

} = require("../controllers/studentController");


const auth = require("../middleware/auth");

const upload = require("../utils/upload");



// Create Student with image
router.post(
    "/",
    auth,
    upload.single("image"),
    createStudent
);



// Get Students
router.get(
    "/",
    auth,
    getStudents
);



// Update Student with image
router.put(
    "/:id",
    auth,
    upload.single("image"),
    updateStudent
);



// Delete Student
router.delete(
    "/:id",
    auth,
    deleteStudent
);



module.exports = router;