// Generics and its different types : -----

function printMyName<T>(name:T):T{
    return name;
    
}

// using generics we can actually pass different datatypes accoring to out need 
console.log(printMyName<string>("rupak"));
console.log(printMyName<number>(1));

// using interfaces  

interface car<T,U> {
    length:T,
    name:U
}

let keyVal :car<number,string> ={
    length:10,
    name:"Rupak"
}
console.log(keyVal);


// generic constraints
// means T can be any type that have a length property that is why T extends length is written .
function print<T extends {length:number}>(item:T):number{
  return item.length;
}

print("jdlf");





