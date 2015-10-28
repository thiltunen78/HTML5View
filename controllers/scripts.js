console.log("here we go!");

//wait document ready event
$(document).ready(function(){
    console.log("jquery onload triggered");
    
    $("#head").css("background-color","lightblue")
    .css("padding","20px").css("border-radius","8px");
    
    $(".about").text("new text");
    
    $("[data-dummy]").html("<p>hello maailma</p>");
})

/*
$(document).ready(domReady);

function domReady(){
    
}
*/

/*
window.onload = function (event) {
    console.log(event);
    para1.innerHTML = "changed from js";
    para1.style.backgroundColor = "red";
    
    var tempP = document.createElement("p");
    tempP.innerHTML = "new element";
    para1.appendChild(tempP);
};

*/

/*

window.onload = domReady;

function domReady(event){
    return 2;
}

function someFunction(nimi){
    console.log(nimi);
} 

someFunction(21);
someFunction("tero");

*/