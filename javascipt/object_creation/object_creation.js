// // 1.object literal
// let obj1 ={
//     name:"rupak",
//     age:23
// }
// console.log(obj1);

// // 2.new Object
// let obj2 = new Object();
// obj2.name ="rupak";
// obj2.age=23;
// obj2.func =function(){
//     console.log("hi i am a function")
// };

// console.log(obj2);

// // 3.from es6 class 
// class obji3{
//     constructor(name,age){
//         this.name =name;
//         this.age=age;
//     }
//     print(){
//         console.log("hi there what is your name")
//     }
// }

// let obj3 = new obji3("rupak",23);
// console.log(obj3)


// // 4 . constructor function 
// function obji4(name,age){
//     this.name =name;
//     this.age =age;
//     this.print =function(){
//         console.log("hi there ")
//     }
// }

// let obj4 =new obji4("rupak",23);
// console.log(obj4);

// // 5.prototype object
// let proto ={
//     name:"rupak",
//     age:23
// }

// let obj5 =Object.create(proto);
// obj5.name ="rupak";
// console.log(obj5);

// // 6. object.assign
// let obj61={
//     name:"rupak"
// }
// let obj62={
//     age:"rupak"
// }

// let obj63 =Object.assign({},obj61,obj62);
// console.log(obj63);

// 7 . factory function
function factory(name,age){
    return{
        name,
        age,
        print:function(){
            console.log(`hi there !! ${this.name}`)
        }
    }
}

let obj7 =factory("rupak",23);
console.log(obj7.print())

// // 8.json parse
// let jsonstr ='{"name":"rupak","age":"23"}';
// let obj8 =JSON.parse(jsonstr);
// console.log(obj8)







