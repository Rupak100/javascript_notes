function promise(){
    return Promise.resolve(["rupak","nand","anish"]);
}

let a = promise();
let b = a;
let c = a.then((data)=>{
    data.map((s)=>{
        console.log(s);
    });
    return data[0];
});

console.log(b);
console.log(c);
c.then((s)=>{
    console.log(s)
})