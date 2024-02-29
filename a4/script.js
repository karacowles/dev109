//Letters only
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

function validPhone(num) {
    return /^\d*$/.test(num);
}

function validPassword(pass){
 return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(pass);
}

function validation(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email= document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    var address= document.getElementById("address").value;
    var city= document.getElementById("city").value;
    var state= document.getElementById("state").value;
    var country= document.getElementById("country").value;
    var zipcode= document.getElementById("zipcode").value;
    
    var isvalidFirstname = validString(firstname);//testing for numbers in first name
    var isvalidLastname = validString(lastname);
    var isvalidEmail = validEmail(email);
    var isvalidPhone = validPhone(phone);  
    var isvalidPass = validPassword(password)
    
    
    //First Name
        if (firstname==="null" || firstname==="" || firstname.length > 20 || !isvalidFirstname){
             document.getElementById("invalid_1").innerHTML = "First name is required and cannot be longer than 20 characters";
    
        }
      

    
     //Last Name
     if (lastname==="null" || lastname==="" || lastname.length > 50 || !isvalidLastname){
             document.getElementById("invalid_2").innerHTML = "Last name is required and cannot be longer than 50 characters";
    
        }
    //Email  
    if (email==="null" || email==="" || !isvalidEmail){
        document.getElementById("invalid_3").innerHTML = "Invalid Email!";
        
    }
    
    //Phone 
    if (phone==="null" || phone==="" || phone.length >15 || !isvalidPhone){
        document.getElementById("invalid_4").innerHTML = "Invalid Phone Number!";
    
      
        }
    
    //Username
        if (username==="null" || username=== "" || username.length >12){
            document.getElementById("invalid_5").innerHTML = "Username Must Have Only 12 Characters";
        }
        
    
    //Password
    if(password==="null" || password==="" || password.length >7 || !isvalidPass){
        document.getElementById("invalid_6").innerHTML = "Maximum 7 characters and password must contain one upper case and one lower case";
    }
    

//Address
    if(address==="null" || address===""){
        document.getElementById("invalid_7").innerHTML = "Required";
    }


//City
    if(city==="null" || city===""){
        document.getElementById("invalid_8").innerHTML = "Required";
    }
    
//State
    if(state==="null" || state===""){
        document.getElementById("invalid_9").innerHTML = "Required";
    }
    
//Country
    if(country==="null" || country===""){
        document.getElementById("invalid_10").innerHTML = "Required";
    }
    
//Zipcode
    if(country==="USA" && (zipcode.length >5 || zipcode==="null" || zipcode==="")){
        document.getElementById("invalid_11").innerHTML = "Required only if country is USA";
    }


    
    
    
    
    
    
    
    
    
    

    
    
    
    


}


   












