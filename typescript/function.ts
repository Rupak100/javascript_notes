
//how to declare a function with a function type expression  in typescript

// function bypass(fn:(a:string)=>string):string{
//    return fn("hello world");
// }

// function print(a:string):string{
//    return a;
    
// }
// console.log(bypass(print));



//   Rest Parameter
// function sum(...num:number[]):number{
//    return num.reduce((tot,n)=>{
//     return tot+n;
//    })
// }

// console.log(sum(1,2,43,5))


// FActorial of a number

// function fact(n:number):number{
//     if (n===0 || n===1) {
//         return 1;
//     }
//   return n*fact(n-1);
// }
// console.log(fact(100));


// User object with name age and email

//using interface------------
//  interface userObj  {
//     name:string,
//     age:number,
//     email:"Rupak@asuda.com"
//  };

//  function print(userObj:userObj):void{
//    console.log(`Name : ${userObj.name} Age: ${userObj.age} email : ${userObj.email}`);
//  }
 

//  print({ name:"Rupak",
//     age:23,
//     email:"Rupak@asuda.com"});

//using objects -----------------
//  const userObj = {
//     name:"Rupak",
//     age:23,
//     email:"Rupak@asuda.com"
//  };

//  function print(userObj:{name:string,age:number,email:string}):void{
//    console.log(`Name : ${userObj.name} Age: ${userObj.age} email : ${userObj.email}`);
//  }
 

//  print(userObj);


//calculate the total price of a product where the input is having an array of objects where each of the objects has price and quantity 


// interface Product{
//     price:number,
//     quantity:number
// }

// function calculateTotPrice(product:Product[]):number{
//      let totalPrice =0;
//      product.forEach((p:Product)=>{
//        totalPrice+=p.price*p.quantity;
//    })
//   return totalPrice;

// return product.reduce((tot:number,p:Product)=>{
//     return tot+(p.price*p.quantity)
// },0);
// }

// console.log(calculateTotPrice([

//     {
//      price:2,
//      quantity:6
//     },
//     {
//         price:8,
//         quantity:10
//     },
//     {
//         price:6,
//         quantity:15
//     }
// ]));



// define a union type for a vehicle which is either be a bike or scooty so return accordingly

// interface Bike{
//     name:'bike',
//     gear:boolean,
//     year:number
// }

// interface Scooty {
//     name:'scooty',
//     gear:boolean,
//     cc:number
// }

// type vehicle =Bike|Scooty;
// function printDetails(vehicle:vehicle):void{
//     if (vehicle.name === "bike") {
//         console.log(`Name :${vehicle.name} Gear :${vehicle.gear} year: ${vehicle.year}`);
//     }
//     else{
//         console.log(`Name :${vehicle.name} Gear :${vehicle.gear} year: ${vehicle.cc}`);
        
//     }
// }
// const bike :vehicle = {
//     name:"bike",
//     gear:true,
//     year:1978
// }
// printDetails(bike)








