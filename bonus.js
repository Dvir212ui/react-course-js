//the import section
import { students } from "./data.js";//named export in data.js so {} needed 
import withStatus from "./report.js";//default export in report.js so no {} needed

const studentsWithStatus = withStatus(students);

for(const student of studentsWithStatus)
{
    console.log(`${student.name}: ${student.status}`)
}
console.log(students[0].status);
