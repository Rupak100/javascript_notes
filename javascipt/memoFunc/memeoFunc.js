function sum(...args){
    return args[0]+args[1];
}


function memo(fn){
    let store = {};
    return function(...args){
        let key =JSON.stringify(args);
        if(!store[key]){
            store[key] = fn(...args);
        }
        return store[key];
    }
}

let memogized = memo(sum);

console.log(memogized(1,2,3,4))