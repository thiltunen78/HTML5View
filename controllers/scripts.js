


console.log("here we go!");

//wait document ready event
$(document).ready(function(){
    console.log("jquery onload triggered");
    
    $("#head").css("background-color","lightblue")
    .css("padding","20px").css("border-radius","8px");
    
    $(".about").text("new text");
    
    $("[data-dummy]").html("<p>hello maailma</p>");
    
    var setting = {
        
        method:"GET",
        url:"http://localhost:28017/oma/person/",
        dataType:"jsonp",
        jsonp:"jsonp"
    };
    
    $.ajax(setting).done(function(data){ // lähetä pyyntö ja käsittele saatu data
        console.log(data);
        
        for(var i=0;i<data.rows.length;i++){
            
            var html =  "<tr>" +
                        "<td>" + data.rows[i].name + "</td>" +
                        "<td>" + data.rows[i].address + "</td>" +
                        "<td>" + data.rows[i].age + "</td>" +
                        "</tr>";
            
            $(html).appendTo("tbody");
        };
    }); 
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