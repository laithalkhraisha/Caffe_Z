
function sendData(){

 var name =document.getElementById("name").value;
 let age =document.getElementById("age").value;
 let drinkt = document.querySelector('.drinkt:checked').value;
 let drinkn =document.getElementById("drinkn").value;

 let div1 = document.createElement("div");
  let p1 = document.createElement("p");
   let ul1 = document.createElement("ul"); 
   let li1 = document.createElement("li");
    let li2 = document.createElement("li"); 
    let li3 = document.createElement("li");
    
   p1.textContent = `name is ${name}`;
    li1.textContent = `age ${age}`;
     li2.textContent = `type of drink ${drinkt}`; 
     li3.textContent = `drink name is ${drinkn}`; 

    div1.appendChild(p1);
     div1.appendChild(ul1);
      ul1.appendChild(li1);
       ul1.appendChild(li2); 
       ul1.appendChild(li3); 

     document.body.appendChild(div1);
}
