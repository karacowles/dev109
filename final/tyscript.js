
function validString(str) {
    if(/^[a-zA-Z]+$/.test(str)) {
    return true;
}
    
else{
  return false;}
}

function validEmail(email) {
var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos <atpos +2 || dotpos + 2 >= email.length) 
    {
    return false;
    } 
    else  {
        return true; 
    }
}


const form= document.querySelector("form");
form.addEventListener("submit", validation);

function validation(e){
    
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;

  
    var isvalidName = validString(name);
    var isvalidEmail = validEmail(email);

 console.log(isvalidName, isvalidEmail);   
    
 
        if (!isvalidName){
           alert ("Your name is required");
             
        }
    
       else if (!isvalidEmail){
           alert ("Your email is required");
             
        }
    else {
        window.location.href= window.location.href.replace("contactme", "thankyou"); 
    }
}