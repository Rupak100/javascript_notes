// type aliases

// type User2 ={
//   name:string;
//   age:number;
//   isgood:boolean
// }

// function getInfo(user:User2):User2{
//   user.name = "rupak";
//   return user;
// }

// let a  = getInfo({name:"",age:2,isgood:false});
// console.log(a)



// type intersection

// type student= {
//   name:string;
//   age:number
// }

// type emp =student&{
//   salary:number
// }

// function print(user:emp){
//  console.log(user)
// }

// print({name:"rupak",salary:23,age:23})




// function type 

// type fun= (name:string)=>string;

// let name2:fun = (name)=>"jeloo";



// array type

// type arrayobj= string[];
// let arr :arrayobj=["st",1]



// union
// type str = string |boolean|number;
// let vari:str =1



// javascript tuples

// let arr:[string,number]=["str",1];
// arr.push();
// console.log(arr)



// interface

// interface int{
//   name:string,
//   age:23;
// }


// interface money extends int{
//   salary:number
// }

// let obj:money={
//   age:23,
//   name:"tupa",
//   salary:2333
// }
// console.log(obj)



// private and public with classes
// class A{
//   constructor(private name:string,public age:number){

//   }
// }





// an interface exdtends another interface but a class implements another interface


//abstract classess


// we cant instanciate an abastract class ;
// abstract class Animal {
//     constructor(public name: string) {}

//     // Abstract method (must be implemented in child classes)
//     abstract makeSound(): void;

//     // Concrete method (already implemented)
//     move(): void {
//         console.log(`${this.name} is moving...`);
//     }
// }

// // Concrete class extending an abstract class
// class Dog extends Animal {
//   //  constructor(public name:string){
//   //     super(name);
//   //  }
//     makeSound(): void {
//         console.log("Woof! Woof!");
//     }
// }

// const dog = new Dog("Buddy");
// dog.makeSound(); // ✅ Woof! Woof!
// dog.move();      // ✅ Buddy is moving...



// generics

// function print<T>(name:T):T{
//   return name
// }



// type a = string;
// let a:string = print<string>("rupak");
// console.log(a)


// type user={
//   name:string,
//   age:number,
//   role:"normal"|"special"
// }


// let user1:user={
//   name:"rupak",
//   age:23,
//   role:"normal"
// }

// console.log(user1)



// ENUMS

// enum Roles{
//   user = "user",
//   admin="admin"

// }

// type user ={
//   name:string,
//   role:Roles

// }

// let user1:user = {
//   name:"rupak",
//   role:Roles.user
// }
// let user2:user = {
//   name:"rupak1",
//   role:Roles.admin
// }

// // arrow function 
//   let isadmin = (ranuser:user):string|user =>{
//     if(ranuser.role===Roles.admin){
//       return user2;
//     }
//     return "the user is not having the edit access as it is not the admin";
//   }

//  console.log(isadmin(user1))



// Decorators

// A decorator is noting but a function

// function decor(target:Function){
//   console.log(target);
// }
// @decor
// class base{
//   constructor(){
//     console.log("i am called")
//   }
// }
// // let n =  new base();


// 4. Method Decorators
// Method decorators are used to modify methods inside a class.

// Example: Method Logger
// typescript

// function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   console.log(`Method Name: ${methodName}`);
//   return descriptor;
// }

// class User {
//   @LogMethod
//   sayHello() {
//     console.log("Hello, World!");
//   }
// }

// const user = new User();
// user.sayHello();
// Output:
// Method Name: sayHello
// Hello, World!
// ✔️ @LogMethod decorates sayHello, logging its name before execution.





// Revise these topics

// abstract classes
// generics
// interface vs types vs abstract classes
// decorators






