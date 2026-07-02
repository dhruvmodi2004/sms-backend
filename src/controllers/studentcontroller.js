const Student = require("../models/Student");


// Create Student
exports.createStudent = async(req,res)=>{

    try{

        const student = await Student.create({

            name: req.body.name,

            email: req.body.email,

            phone: req.body.phone,

            course: req.body.course,

            image: req.file ? req.file.filename : null

        });


        res.status(201).json({

            message:"Student created",

            student

        });


    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};





// Get All Students
exports.getStudents = async(req,res)=>{

    try{


        const students = await Student.find();


        res.json(students);



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};





// Update Student
exports.updateStudent = async(req,res)=>{


    try{


        const updateData = {


            name:req.body.name,

            email:req.body.email,

            phone:req.body.phone,

            course:req.body.course


        };


        if(req.file){

            updateData.image = req.file.filename;

        }



        const student = await Student.findByIdAndUpdate(

            req.params.id,

            updateData,

            {
                new:true
            }

        );



        res.json({

            message:"Student updated",

            student

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};





// Delete Student
exports.deleteStudent = async(req,res)=>{


    try{


        await Student.findByIdAndDelete(req.params.id);



        res.json({

            message:"Student deleted"

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};