

 var msg = "<h2> Multiplication Table </h2>";//Heading for table
var multiplication ="<h2> Multiplication Table </h2>";//Multiplication variable



//Prompt for user
function myFunction() {
  let number = prompt("Please enter a number between 0-10");
   //Kept this in because I liked it 
  if (number != null) {
    document.getElementById("table").innerHTML =
    "You chose " + number + "!";
    var el = document.getElementById('blackboard');
  }
   
      
 //Times table   
for (i=0;i<=10;i++){
    multiplication += i + "<b>x</b>" + number + "=" + (i* number) + "<br>"; 

}//I can not remember why this is here but I know it is important
 el.innerHTML = multiplication;   
  }

