

let person="";
let text="";
function myFunction() {
  
   person = prompt("Please enter your name:", "Name");
  
    text = person;
    getgender()
  }
 
  
  

let gender="";
let text2="";
function getgender() {
  
    gender = prompt("Please enter your gender:", "MALE");
    while(gender.toLowerCase()!="male" && gender.toLowerCase()!="female"){
      gender = prompt("Please enter your gender correctly:", "MALE");
     
    }

  if (gender.toLowerCase() == "male") {
    text2 = "MR";
    alert("Hello  "+text2+"  "+person);
    
  }
  else if(( gender.toUpperCase() == "FEMALE")) {
    text2 = "MS";
    alert("Hello  "+text2 +"  " +person);
  }
  else {
    text2 = " ";
    alert("Hello "+person);
  }
  person=text2+"  "+person;
  
  
}
let drtype="";
function myFunction3() {
  
 drtype=prompt("what Do you drink a hot drink or a cold drink?", "hot");
 
   
 }
 let drink="";
 function myFunction4() {
  
    drink = prompt("what name of drink you want?", "Tea");
 alert("your drink is getting prepared ....");
   

   const order=[person,gender,drtype,drink];
   for(let i=0;i<order.length;i++){
    console.log(order[i]);
    
   };
 }
 function myFunction5() {
 let div1 = document.createElement("div");
  let p1 = document.createElement("p");
   let ul1 = document.createElement("ul"); 
   let li1 = document.createElement("li");
    let li2 = document.createElement("li"); 
    let li3 = document.createElement("li");
    
   p1.textContent = `name is ${person}`;
    li1.textContent = `gender is ${gender}`;
     li2.textContent = `type of drink ${drtype}`; 
     li3.textContent = `drink name is ${drink}`; 

    div1.appendChild(p1);
     div1.appendChild(ul1);
      ul1.appendChild(li1);
       ul1.appendChild(li2); 
       ul1.appendChild(li3); 

     document.body.appendChild(div1);
 }


 