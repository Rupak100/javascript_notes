let abc = [20,30,40];
abc.forEach(()=>{
    console.log(this)   // window
})