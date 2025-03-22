const parent =document.getElementsByClassName('parent')[0];
const child = document.getElementsByClassName('child')[0];
// changing the innertext of an element 
child.textContent="hi i am a second child appended in place of the first child "
//adding an innerhtml inside an html element 
child.innerHTML=`<div>hi mai hu kaun</div>`;
//setting an attribute like class or id inside a element
child.setAttribute('id','#mal');


//appending a new element inner to a html element 
const newdiv=document.createElement('div');
newdiv.setAttribute('class',"child2");
child.appendChild(newdiv);

// deleting an element
child.removeChild(newdiv);

// inseting a new element before another html element 
parent.insertBefore(newdiv,child);
child.insertAdjacentElement('befo',newdiv)







