// function Name(a,b) {
//     this.a=a,
//     this.b=b;
// }
// let e1= Name(1,2);
// let e2=new Name(1,2);
// console.log(e1);
// console.log(e2);

// // bydefault javascirpt funciton returns a undefined

// //if use new it returns a object implecitly


// function Name(a,b) {
//     this.a=a,
//     this.b=b;
//      return "HEllo"
// }
// function Name(a,b) {
//     this.a=a,
//     this.b=b;
//      return {name:"Rupak"}
// }
// let e3= Name(1,2);
// let e4=new Name(1,2);
// console.log(e1);
// console.log(e2);



//   Factory Function


// function Name(a,b) {
//     this.a=a,
//     this.b=b;
//     this.show =function () {
//         console.log("Hi");
        
//     }
// }

// Name.greet = function() {
//     console.log("Hi");
    
// }

// let e3=new Name(1,2);
// let e4=new Name(1,2);
// console.log(e3.show===e4.show);

// e3.greet();





// let obj ={
//     name :"rupak",
//     age:20
// }
// let obj1= Object.create(obj)

// obj1.email="af;slkdjf;";
// console.log(obj1);

// age and name are not direct property of obj1 it will go to the prototype 


// class Person{
//     constructor(name,age){
//         this.name =this.name,
//         this.age =age
//     }
//     show(){
//         console.log("Hii");
        
//     }
// }
// let p1=new Person("Rupak,20")
// let p2=new Person("Namd,20")
// console.log(p1);
// console.log(p2);

// the show method will go to the prototype




// Object.assign

let obj1 ={
    name:"rupak",
    age:23
}

let obj2 ={
    name:"kisan",
    pel:22
}

let obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

console.log('Descriptor for name:', Object.getOwnPropertyDescriptor(obj3, 'name'));
console.log('Descriptor for age:', Object.getOwnPropertyDescriptor(obj3, 'age'));
console.log('Descriptor for pel:', Object.getOwnPropertyDescriptor(obj3, 'pel'));

// Object.defineProperty(obj1, 'name', {
//     enumerable: false
//   });
// Object.defineProperty(obj1, 'age', {
//     enumerable: false
//   });
// Object.defineProperty(obj2, 'pel', {
//     enumerable: false
//   });

//   let obj4=Object.assign({},obj1,obj2);
//  console.log(obj4);


// Object assign read properly 





// es6

// weak set 
// weak map 
// set 
// map
// yel
// generator 
// this




  























