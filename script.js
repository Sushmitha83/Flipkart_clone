//NOW AM CREATING A FUNCTION

function validationForm(){
 
    let user= document.getElementById("user").value;
    let password= document.getElementById("password").value;

//NOW AM GIVING A CONDITION
if(user==""){
document.getElementById("user_error").innerHTML="Please Enter UserName";
return false;
}
else if(!isNaN(user)){
    document.getElementById("user_error").innerHTML="Please Enter UserName must be alphabets";
    return false;
}
else if(user.length<3 ){
    document.getElementById("user_error").innerHTML="Please Enter Minimum four characters ";
    return false;
}
else{
    document.getElementById("user_error").innerHTML="";
 
}


if(password==""){
    document.getElementById("pass_error").innerHTML="Please Enter Password";
    return false;
    }
    else if(isNaN(password)){
        document.getElementById("pass_error").innerHTML="Please Enter UserName must be Numbers";
        return false;
    }
    else if(password.length<3 ){
        document.getElementById("pass_error").innerHTML="Please Enter Minimum four Numbers";
        return false;
    }
    else{
        document.getElementById("pass_error").innerHTML="";
 
    }




}
// JAVASCRIPT VALIDATION COMPLETED
