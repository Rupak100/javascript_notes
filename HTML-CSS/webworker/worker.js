self.onmessage =(event)=>{
    console.log(event.data);
    self.postMessage("the value of the heavy computation is 100000")
}

