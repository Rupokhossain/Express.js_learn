const students = [
    {
        id: 1, 
        name: "Siam Ahmed",
        gpa: 3.50
    },
    {
        id: 2, 
        name: "Wahida Islam",
        gpa: 3.80
    },
    {
        id: 3, 
        name: "Rupok hossain",
        gpa: 3.90
    },
];


exports.findStudentById = (id) => {
    return students.find(s => s.id === parseInt(id));
};