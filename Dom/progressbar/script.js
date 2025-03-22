let container =document.querySelector("#prog-con");
let bar =document.querySelector("#progress");
let v=0;
let fillcolor =setInterval(()=>{
   v+=10;
   bar.style.width =v+"%";
   if(v>=100){
    clearInterval(fillcolor);
   }
},1000);


