
//how to check the type of the variables -------

// let a:string ="3";
// a="6";
// console.log(typeof a);


//how to pass any object to a function ---------

// const obj ={
//     a:2,
//     b:3
// }

// function print(obj:{a:number,b:number}){
//     console.log(obj.a);
//     console.log(obj.b);
    
// }

// print(obj);


//Union types --------------

// function union(a:number|string){
//     console.log(a);
    
// }

// union(1)



// type Aliases
//  creating a central type aliases to use it multiple times
// type Point = {
//     x: number;
//     y: number;
// };

// function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

// Using Type Aliases
// You can use the & operator to combine types:

// typescript
// type Vehicle = {
//     make: string;
//     model: string;
// };

// type Car = Vehicle & {
//     numberOfDoors: number;
// };

// const myCar: Car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     numberOfDoors: 4,
// };



// Interfaces
// An interface declaration is another way to name an object type:

// interface Point {
//   x: number;
//   y: number;
// }
 
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
 
// printCoord({ x: 100, y: 100 });



//extending an interface
// interface Animal{
//     name:String
// }
// interface Dog extends Animal{
//     age:number
// }
// function getInfo():Dog{
    
//     return{
//         name:"Dog",
//         age:2
//     }
    
// }
// const dog = getInfo();
// console.log(dog.name);
// console.log(dog.age);


