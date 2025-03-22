
let counter2 =0;
function api(counter){
  let cont_box=document.getElementById("content");
  cont_box.textContent = counter;
}

 

function throttle(fn,d){
  let last = 0;
  let counter =0;
  return function(){
    let nowi =new Date().getTime();
    if(nowi-last<d) return ;
    last =nowi;
    api(counter++);
  }
}
let throttling = throttle(api,3000)


    