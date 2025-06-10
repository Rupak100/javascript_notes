 
// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log("push " , arr);
 
// arr.pop();
// console.log("pop " , arr);
 
// arr.shift();
// console.log("shift " , arr);
 
// arr.unshift(1);
// console.log("unshift ",arr);
 
// console.log("slice method in array to find subarray")
// console.log(arr.slice(1))
 
// console.log(arr);
// console.log(arr.slice(1,3));   // end index not included [2,3]
 
 
 
 
// let arr2 = [[[[4]]]];
// console.log(arr2.flat())
// console.log(arr2.flat(2))
// console.log(arr2.flat(3))
 
// const nested = [1, [2, [3, [4]]]];
// console.log(nested.flat());        
// console.log(nested.flat(2));    
// console.log(nested.flat(Infinity));
 
// const numbers = [1, 2, 3];
 
 
//flatmap()
// Multiply each number by 2 and wrap it in an array
// console.log(numbers.map(x => [x * 2])); // Output: [[2], [4], [6]]
 
// Flatten the result with flatMap()
// console.log(numbers.flatMap(x => [x * 2])); // Output: [2, 4, 6]
 
 
// let a = [1,2,3];
// let b = [4,5,6];
// let c = a.concat(b);
// console.log(c)
 
// let x = a.join('')
// console.log(x)
// let y = c.join('==')
// console.log(y)
 
// let p = y.split('==');
// console.log(p)
 
 
// // map
 
// console.log("-----------Map----------");
// const double = arr.map((x) => {
//     return x*2;
// });
 
// console.log(double);
 
 
 
// // filter
 
// console.log("-----------Filter----------");
// const mod2 = arr.filter((x) => {
//     return x%2 === 0;
// })
 
// console.log(mod2);
 
// // console.log("-----------Find first in array ----------");
// console.log("1st no. greater than 3");
// let ans = arr.find( (X) =>{
//     return X > 3;
// })
// console.log(ans);
 
 
 
// find function with array of objects
 
// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' }
// ];
 
// // Find user with id 2
// const user = users.find(user => user.id === 2);
// console.log("user with id = 2 " , user); // { id: 2, name: 'Jane' }
 
 
 
 
// findindex first function
 
// const arr = [1,2,3,4,5,6,2,9,15];
 
// console.log("index of first no. greater than 6 ")
// const num = arr.findIndex((x) =>{
//     if(x > 6) return x;
// })
// console.log(num);
 
 
 
// Reduce function in array========
 
// const arr = [1,3,4,5,6,2,9,10];
 
// const total = arr.reduce( (Sum ,items)=>{ //accumulator, current
//     return Sum + items;
// } , 0) // 0 is initial value of Sum
 
// console.log(total);
 
// //Method 2 using for each loop.....
// let sum = 0;
// arr.forEach((items) => {
//     sum += items;
// })
// console.log(sum);
 
// simple example of reduce
 
// let initialState = 0;
 
// let array = [1,2,3,4,5];
 
// const res = array.reduce( (acc , curr) =>{
//     console.log(`acc ${acc} , curr  ${curr} , acc = curr + prev_acc`);
//     return acc + curr;
// } , initialState);
 
// console.log(res);
 
 
 
//------------------- Flat----------
 
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 
// const arr = [1, [2, [3, [4]], 5]];
// const flatArray = arr.flat(2);
 
// console.log(flatArray); // [1, 2, 3, 4, 5]
 
 
 
 
//-------------- FlatMap---------------------------
 
//First maps each element using a mapping function, then flattens the result into a new array. It's a one-level deep flattening method.
 
// const arr = [1, 2, 3];
// const flatMappedArray = arr.flatMap(num => [num, num * 2]);
 
// console.log(flatMappedArray); // [1, 2, 2, 4, 3, 6]
 
 
 
//------------------ concat-----------------
 
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const mergedArray = arr1.concat(arr2);
 
// console.log(mergedArray); // [1, 2, 3, 4]
 
 
 
 
// -------------------- slice----------------------
// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
 
// const arr = [1, 2, 3, 4, 5];
// const slicedArray = arr.slice(1, 3);
 
// console.log(slicedArray); // [2, 3]
 
 
 
 
// -------------------- splice----------------------
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2 , "nand");     // idx 1 se aage k 2 ele hta dega
 
// console.log(arr); // [ 1, 'nand', 4, 5 ]
 
 
///------------- reverse------------------------------
// const arr = [1,2,3,4];
// const rev = arr.reverse();
// console.log(rev)
 
 
// --------------------indexOf and LastIndexOf-------------------
 
// indexOf : Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 
// const arr = [1, 2, 3, 2, 1];
// const index = arr.indexOf(2);
// console.log(index);
 
//Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
 
// const arr = [1, 2, 3, 2, 1];
// const index = arr.lastIndexOf(2);
// console.log(index);
 
 
 
//------------ spread operator-----------
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
 
// console.log(arr2); // [1, 2, 3, 4, 5]
 
 
//--------------------Rest Parameters--------------------------
// function sum(...numbers) {
//     let tatal  = 0;
//     numbers.forEach((x)=>{
//         tatal += x;
//     })
 
//     return tatal;
// }
 
//   console.log(sum(1, 2, 3, 4, 5)); // 15






// Getting the second maximum element from the array------------------------
// let arr =[2,3,6,7,5,9,84,34];

// let maxi =Math.max.apply(null,arr);
// console.log(maxi);
// let second =-Infinity;
// arr.forEach((a)=>{
//     if(a>second && a!==maxi){
//         second =a;
//     }
// });
// console.log(second)




// Rotate the array by k---------------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = 2;

// k = k % arr.length; // To handle cases where k > arr.length
// let rotatedArr = [...arr.slice(-k), ...arr.slice(0, -k)];

// console.log(rotatedArr);



// Remove duplicates is a sorted array

// let arr =[0,0,1,1,1,2,2,2,3,5,5,5];

// for(let i =0;i<arr.length-1;i++){
//     if(arr[i]===arr[i+1]){
//         arr.splice(i+1,1);
//         i--;
//     }
// }

// console.log(arr)
 