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
        url:"http://localhost:3000/persons/",
        dataType:"json"        
    };
    
    $.ajax(setting).done(function(data){ // lähetä pyyntö ja käsittele saatu data
        
        console.log(data);
        
        //get all keys(attribute names) from json object
        console.log(Object.keys(data[0]));
        
        // create headers also dynamically
        if(data.length > 0){ //check that there are elements in array       
            var headers = Object.keys(data[0]);
            
            var row = $("<tr></tr>"); // create tr element
            for(var i=1;i<headers.length;i++){
            
                // create header and add it to row
                $("<th>" + headers[i] + "</th>").appendTo(row);
                
                // add row to thead element
                $(row).appendTo("thead");
            }
        }
        
        // create table content dynamically
        for(var i=0;i<data.length;i++){
            
            var html =  "<tr>" +
                        "<td>" + data[i].name + "</td>" +
                        "<td>" + data[i].address + "</td>" +
                        "<td>" + data[i].age + "</td>" +
                        "<td>" + data[i].UUSISARAKE + "</td>" +
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