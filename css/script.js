var email = document.getElementById("email1");
var pwd = document.getElementById("pwd");
var error = document.getElementById("error");
var error1 = document.getElementById("error1")

function validation(){
    if(validationemail()){

    }
    else{
        return false;
    }

    if(validationpass(pwd)){
        alert("Welcome to Kerala Tourism Webpage")
    }
    else{
        return false;
    }
}


function validationemail(){
    let reg=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
   
    // if(email.value.trim()==""){
    //     // alert("validation done");
       
    //     error.innerHTML= "please enter your email";
    //     error.style.color="red";
    //     error.style.fontFamily="italic";
    //     email.style.border="red solid ";
    //     return false;
        
    // }
      if(reg.test(email.value)){
        error.innerHTML="";
        error.style.color="green";
         error.style.fontFamily="italic";
        email.style.border="green solid ";
       
        return true;

    }
    else {
        error.innerHTML="Enter a valid Email";
        error.style.color="red";
            error.style.fontFamily="italic";
             
            email.style.border="red solid ";
            return false;
    }
    // else if(pwd.value.trim()==""){
    //     error1.innerHTML= "please enter your password";
    //     error1.style.color="red";
    //     error1.style.fontFamily="italic";
    //     pwd.style.border="red solid ";
    //     return false;

    // }
    // else {
    //     // 
    //     return true;
    // }
}

function validationpass(pwd){
    if(pwd.value.trim()==""){
            error1.innerHTML= "Please enter your password";
            error1.style.color="red";
            error1.style.fontFamily="italic";
            pwd.style.border="red solid ";
            return false;
    
        }
        else {
            // 
            return true;
        }

}