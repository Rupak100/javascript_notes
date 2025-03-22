const images = [
    {
      src: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
      alt: "A beautiful sunrise over the mountains",
      title: "Sunrise in the Mountains",
    },
    {
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      alt: "A calm beach with clear blue water",
      title: "Relaxing Beach",
    },
    {
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      alt: "A dense forest with towering trees",
      title: "Mystic Forest",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      alt: "A cityscape at night with bright lights",
      title: "City Lights at Night",
    },
    {
      src: "https://images.unsplash.com/photo-1441931423375-cc2d99eebb62",
      alt: "A serene lake surrounded by mountains",
      title: "Peaceful Lake",
    },
  ];

  let img_container =document.getElementById("img-container");
  let previous = document.getElementById("pre");
  let next = document.getElementById("next");

  let image  = document.createElement('img');
  image.style.height="100px";
  image.style.width ="100px";
  img_container.appendChild(image);
   

  let active =0;

  function createImg(){
    image.src =images[active].src;
    image.alt =images[active].alt;
    image.title =images[active].title;
  }
  createImg();
//   img-container.appendChild(image);
previous.innerHTML="Pre";
next.innerHTML="Next"
previous.addEventListener('click',()=>{
    if(active===0){
        active=images.length-1;
    }else{
        active--;
    }
    createImg()
});
next.addEventListener('click',()=>{
    if(active===images.length-1){
        active =0;
    }else{
        active++;
    }
    createImg()
});

