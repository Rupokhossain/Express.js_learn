

const studentModel = require("../models/studentModel");

exports.getStudents = (req, res) => {
    const id = req.params.id;
    const student = studentModel.findStudentById(id);

    if(student) {
        res.status(200).json({
            success: true,
            data: student
        });
    } else {
        res.status(404).json({
            success: false,
            message: "Student not found!"
        });
    }
};