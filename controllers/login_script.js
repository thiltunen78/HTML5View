$(document).ready(function(){
  
    $("#login").click(loginHandler);
    $("#register").click(registerHandler);
    
});

//this function is called when login button is pressed.
function loginHandler(event){
    
    var requestData = {
    
        username: $("#username").val(),
        password: $("#password").val(),
    };
    
    localStorage['username'] = $("#username").val(); // pysyvä selaimeen tallennus
    sessionStorage['user'] = $("#username").val(); // selaimen aukioloaikanen tallennus
    
    //send login request to server
    $.ajax({
    
        method: "POST",
        url: "http://localhost:3000/friends/login",
        data: requestData,
        dataType: "json",
    }).done(loginResponseHandler);   
}

//this function is called when register button is pressed
function registerHandler(event){
    
    var requestData = {
    
        username: $("#username").val(),
        password: $("#password").val(),
    };
    
    //send register request to server
    $.ajax({
    
        method: "POST",
        url: "http://localhost:3000/friends/register",
        data: requestData,
        dataType: "json",
    }).done(registerResponseHandler);   
}

//this function is called when login response arrives in some point of time
function loginResponseHandler(data){
    //if login status was ok
    if(data.status === "Ok"){
        
        //load person.html file from server
        window.location.href='http://localhost:3000/persons.html';
    }
    
    else{
        
        $("#status").text(data.status);
    }
}

//this function is called when register response arrives in some point of time
function registerResponseHandler(data){

    $("#status").text(data.status);
}

