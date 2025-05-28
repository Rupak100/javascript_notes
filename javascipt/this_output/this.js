/// interview
 
// let o = {
//     name : "p",
//     show : function(){
//         console.log(this.name)
//         console.log(this)        
//     }
// }
 
// o.show();
// let show2 = o.show;
 
// console.log(show2())  // window as window is calling by default
 
 
// let p = {
//     name : "x",
//     fun : function(){
//         console.log(this);    // p object
//         setTimeout(function(){
//             console.log(this);   // true
//         },1000)
//     }
// }
 
// p.fun();
 
// let p = {
//     name : "x",
//     fun : ()=>{
//         console.log(this);     // window object as arrow have no this it will take parent fun ka this if no parent fun then window
//         setTimeout(function(){
//             console.log(this);   // window
//         },1000)
//     }
// }
 
// p.fun();
 
 
// let p = {
//     name : "x",
//     fun : ()=>{
//         console.log(this);     // window object as arrow have no this it will take parent fun ka this if no parent fun then window
//         setTimeout(()=>{
//             console.log(this);   // window
//         },1000)
//     }
// }
 
// p.fun();
 
 
// let abc = [20,30,40];
// abc.forEach(function(){
//     console.log(this)     //  value within the callback function points to the global object
// })
 
// let abc = [20,30,40];
// abc.forEach(()=>{
//     console.log(this)   // window
// })
 
 
// let p2 = {
//     ar : [20,30,40],
//     transform : function(){
//         console.log(this);     // p2 object
//         this.ar.forEach(()=>{
//             console.log(this);   // p2 object   ?? as arraw fun not have its own this it will take from its parent
//         })
//     }
// }
 
// p2.transform();
 
 
// let p3 = {
//     ar : [20,30,40],
//     transform : function(){
//         console.log(this);          // p3 object
//         this.ar.forEach(function(){
//             console.log(this);        // window .....    as window object is calling callback fun inside for each
//         })
//     }
// }
// p3.transform();
 
 
// let user = {
//     name : "as",
//     age : 20,
//     showName : function(){
//         console.log(this.name);
//         function showAge(){
//             console.log(this.age);   // undefined : as it have window as this
//         }
//         showAge();
//       let s =showAge.bind(this)
//         s();
//     }
// }
 
// user.showName();
 
// let user = {
//     name : "as",
//     age : 20,
//     showName : function(){
//         console.log(this.name);
//         function showAge(){
//             console.log(this.age);   // undefined : as it have window as this
//         }
 
//         this.showAge();  // TypeError: this.showAge is not a function ::  as this represent user and user object not have showAge function
//     }
// }
 
// user.showName();
 
 
// let user1 = {
//     name : "as",
//     age : 20,
//     showName : function(){
//         console.log(this.name);
//         let u = this;
//         function showAge(){
//             console.log(u.age);    // u have age property
//         }
//         showAge();
//     }
// }
 
// user1.showName();
 
 
// let user1 = {
//     name : "as",
//     age : 20,
//     showName : function(){
//         console.log(this.name);
//         showAge = ()=>{
//             console.log(this.age);      // as arraow fun not have own this
//         }
//         showAge();
//     }
// }
 
// user1.showName();
 
 

// let p = {
//     name : "x",
//     fun : ()=>{
//         console.log(this);     // window object as arrow have no this it will take parent fun ka this if no parent fun then window
//        function name(){
//         console.log(this);    //window object
        
//        }
//        name();
//     }
// }

// p.fun();
 
//populer interview question for Rupak Sarkar





// function getSum(str) {
// // write your code here...
//   let value = str.split('_').reduce((acc,val)=>{
//     return acc + (!isNaN(val)?Number(val):0);
// },0);
// console.log(value);
// }
 
// getSum('AB_12_CD_23_EF_20'); // 55
 
// getSum('12_CD_23_EF_20'); // 55





// let p = {
//     name : "x",
//     fun : function(){
//         console.log(this);     
//        var name=()=>{
//         console.log(this);    
        
//        }
//        name();
//     }
// }
// p.fun();



