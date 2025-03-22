let obj ={
    name :"Rupak",
    age:23
}

Object.defineProperty(obj,'name',{
    writable:true,
    enumerable:false,
    configurable:false
});
obj.name ="rupak";
let description = Object.getOwnPropertyDescriptors(obj);
console.log(description);


console.log(obj);

// for (const key in obj) {
//   console.log(obj[key]);
  
// }

// console.log(Object.getOwnPropertyDescriptor(Math , "PI"));

// Object.defineProperty(Math , "PI" , {
//     writable : true,
//     configurable:true
// })

// Math.PI = 4;

// console.log(Math.PI)



// let myPI = Math.PI;
// let myObj = {};
// Object.defineProperty(myObj, 'PI', {
//   value: Math.PI,
//   writable: true, // or false, as needed
//   enumerable: true, // or false, as needed
//   configurable: true // or false, as needed
// });
// myObj.PI =2.4;
// console.log(myObj.PI);
