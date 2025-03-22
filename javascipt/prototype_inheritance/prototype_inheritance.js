function User(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        console.log(this.name);
    };
}

function Employee(dept, name, age) {
    User.call(this, name, age);
    this.dept = dept;
}

// Set up inheritance
Employee.prototype = Object.create(User.prototype);

// 🔴 Reset the constructor reference
Employee.prototype.constructor = Employee;

let e1 = new Employee("sf", "rupak", 23);
let u1 = new User("rupak", 23);

console.log(e1.constructor); // Employee (✔️ Corrected)
console.log(e1 instanceof Employee); // true
console.log(e1 instanceof User); // true
console.log(u1 instanceof Employee); // false