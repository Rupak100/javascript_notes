let original  ={
    a:{
        b:[1,2,3,4]
    },
    c:function(){
        console.log(`${this.a.b[0]}`)
    }
}

let deepcopy =deepCopyFunc(original);
console.log(deepcopy.c());
console.log(original);



function deepCopyFunc(obj){
    // base case
    if(  obj===null || typeof obj!=='object'){
        return obj;
    }
    //creating the objcontainer
    let cont = Array.isArray(obj)?[]:{};
    //recursively go to the next nesting if there is any
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
         cont[i]=deepCopyFunc(obj[i]);
            
        }
    }
    return cont;
    
}