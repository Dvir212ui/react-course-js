// No need to import students array here; data is passed as a parameter from bonus.js
const withStatus = students =>
{
    const studentsWithStatus = [];
    for (const student of students)
    {
        const newStudent = {...student, status: student.grade >= 56 ? "pass" : "fail"};//could use if-else here 
        studentsWithStatus.push(newStudent);
    }
    return studentsWithStatus;
}
export default withStatus;
