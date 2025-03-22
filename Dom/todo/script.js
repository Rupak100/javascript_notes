let con = document.querySelector(".container");

let btn = document.querySelector("#btn1");
btn.addEventListener('click',()=>{
    let text =document.querySelector("#in");
    if (text.value.length===0) {
        return;
    }
    addtask(text.value);
    text.value = "";
})

function addtask(tx){
    let incon =document.createElement("div");
    incon.textContent=tx;
    let bun2 = document.createElement("button");
    bun2.textContent ="Delete";

    bun2.addEventListener('click',()=>{
        con.removeChild(incon);
    });
  incon.appendChild(bun2);
  con.appendChild(incon)


}