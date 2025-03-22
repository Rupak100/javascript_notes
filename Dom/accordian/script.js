const data = [
    {
        title: "Accordion Item 1",
        content: "This is the content for item 1.",
    },
    {
        title: "Accordion Item 2",
        content: "This is the content for item 2.",
    },
    {
        title: "Accordion Item 3",
        content: "This is the content for item 3.",
    },
    {
        title: "Accordion Item 4",
        content: "This is the content for item 4.",
    },
];

let accordianContainer = document.querySelector("#accordian")

data.forEach((d) => {

    //accordian list
    let titleCon = document.createElement("div");
    titleCon.classList.add("acc-title");

    //accordian header
    let acc_header = document.createElement("div");
    acc_header.classList.add("acc-header");
    acc_header.innerText = d.title;

    // accordian body
    let acc_body= document.createElement("div");
    acc_body.classList.add("acc-body");
    acc_body.innerText=d.content;
    
    acc_header.addEventListener("click",()=>{
        acc_body.classList.toggle("active")
    })


    titleCon.appendChild(acc_header)
    titleCon.appendChild(acc_body)

    accordianContainer.appendChild(titleCon);



})