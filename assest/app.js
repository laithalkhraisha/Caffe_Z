

let person="";
let text="";
function myFunction() {
  
   person = prompt("Please enter your name:", "Name");
  
    text = person;
  }
 
  
  

let gender="";
let text2="";
function myFunction2() {
  
    gender = prompt("Please enter your gender:", "MALE");
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
function myFunction3() {
  
   prompt("what Do you drink a hot drink or a cold drink?", "hot");
 
   
 }
 let drink="";
 function myFunction4() {
  
    drink = prompt("what name of drink you want?", "Tea");
 alert("your drink is getting prepared ....");
   console.log(person+"   " +drink);
 }


