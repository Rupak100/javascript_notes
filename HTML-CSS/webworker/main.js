const worker = new Worker("worker.js");


worker.postMessage("hi there");


worker.onmessage =(event) =>{
    console.log(event.data);
}