/*function validateForm() {                        // Declare function changed function                                                              checkUsername() to function validateForm() 
  var firstname = el.value;                        // Store username in variable changed var                                                             username to var firstname
  if (username.length < 5) {                      // If username < 5 characters
    elMsg.className = 'warning';                  // Change class on message
    elMsg.textContent = 'Not long enough, yet...';// Update message
  } else {                                        // Otherwise
    elMsg.textContent = '';                       // Clear the message
  }
}

function tipUsername() {                          // Declare function
  elMsg.className = 'tip';                        // Change class for message
  elMsg.innerHTML = 'Username must be at least 5 characters'; // Add message
}

var el = document.getElementById('username');     // Username input
var elMsg = document.getElementById('feedback');  // Element to hold message

// When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false);// blur call checkUsername()

THE ABOVE IS FROM THE BOOK EXAMPLE*/ 

//THE FOLLOWING IS FROM YOUTUBE TUTORIAL

var invalid= 0;

function validation(){
    
    invalid=0;
        //First Name
        if (document.getElementById("firstname").value == ""){
            document.getElementById("invalid_1").innerHTML = "First name is required and cannot be longer than 20 characters";
            invalid +=1;
        }
        else {
             document.getElementById("invalid_1").innerHTML = "";
        }
        //If any non letters there will be a warning
        if (validString(document.getElementById("firstname")) == false){
            document.getElementById("invalid_1").innerHTML = "Letters Only";
            invalid +1;
        }
    
        //Last Name
        if(document.getElementById("lastname").value ==""){
            document.getElementById("invalid_2").innerHTML ="Last name is required and cannot be longer than 50 characters";
            invalid +=1;
        }
        else {
            document.getElementById("invalid_2").innerHTML = "";
        }
     //If any non letters there will be a warning
        if (validString(document.getElementById("lastname")) == false){
            document.getElementById("invalid_2").innerHTML = "Letters Only";
            invalid +1;
        }
    

        //This goes at the bottom of everthing the if and else: minute 7:24 in video
        if(invalid != 0) {
            return false;
        }
        else {
            return true;
        }
}

//Letters only
function validString(str) {
if(/^[a-zA-Z]+$/.test(str)) {
return true;
}
else{
  return false;}
}


//Let's test it by assigning a value
var correctString = 'Ana';
var incorrectString = 'Ana5';
validString(correctString);
validString(incorrectString);