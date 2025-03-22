// Intersection types allow you to combine multiple types into one.
//  A variable of an intersection type must satisfy all the combined types' constraints.

interface User {
    name: string;
    age: number;
    long:string
}

interface Employee {
    employeeId: number;
}

type EmployeeUser = User & Employee;

const employee: EmployeeUser = {
    name: "Alice",
    age: 30,
    employeeId: 123,
    long:"dsjhlakfj"
};

console.log(employee); // Output: { name: 'Alice', age: 30, employeeId: 123 }