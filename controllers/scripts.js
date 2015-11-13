console.log("here we go!");

//this variable is shown to every function
var g_person_data;

//wait document ready event
$(document).ready(function(){
    console.log("jquery onload triggered");
    
    $("#head").css("background-color","lightblue")
    .css("padding","20px").css("border-radius","8px");
    
    $(".about").text("new text");
    
    $("[data-dummy]").html("<p>hello maailma</p>");
    
    var setting = {
        
        method:"GET",
        url:"http://localhost:3000/friends/username=" + localStorage['username'],
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
            for(var i=1;i<headers.length-1;i++){
            
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
                        "<td><input type='button' id=" + 
                        data[i]._id + " value='Modify'/></td>" +
                        "</tr>";
            
            $(html).appendTo("tbody");
        }; 
        
        //get all elements from DOM where element has attribute 'type' with value 'button'.
        //then add event handler for click event for each of them
        $("[type=button]").click(function(click_data){
        
            //loop trough all the values
            for(var i=0;i<data.length;i++){
                
                //Check if id from button matches one of person id
                if(click_data.currentTarget.id == data[i]._id)
                {
                    buildModifyUI(data[i]);
                    break;
                }
            }       
        });
        
    }); 
    
    $("#search").click(function(){
       
        var text = $("#search_text").val();
        
        $.ajax({
           method:'GET',
           url:'http://localhost:3000/persons/nimi=' + text,  
           data:{user:localStorage.username},
        
        }).done(function(data){
            console.log(data); 
            
            $("tbody").children().remove();
            
            // create table content 
            for(var i=0;i<data.length;i++){            
                var html =  "<tr>" +
                        "<td>" + data[i].name + "</td>" +
                        "<td>" + data[i].address + "</td>" +
                        "<td>" + data[i].age + "</td>" +
                        "<td><input type='button' id=" + 
                        data[i]._id + " value='Modify'/></td>" +
                        "</tr>";
                           
                $(html).appendTo("tbody");
            }; 
            
            //get all elements from DOM where element has attribute 'type' with value 'button'.
            //then add event handler for click event for each of them
            $("[type=button]").click(function(click_data){
        
                //loop trough all the values
                for(var i=0;i<data.length;i++){
                
                    //Check if id from button matches one of person id
                    if(click_data.currentTarget.id == data[i]._id)
                    {
                        buildModifyUI(data[i]);
                        break;
                    }
                }       
            });
           
        });            
    });    
})

function buildModifyUI(person_data){
    
  //window.open("modifyPerson.html","_self",false);  
    
    var html = "<input type='text' id='inputname' value='" + person_data.name + "'/>";
    html += "<input type='text' id='inputaddress' value='" + person_data.address + "'/>";
    html += "<input type='text' id='inputage' value='" + person_data.age + "'/>";
    html += "<input type='button' value='Update' id='update'/>";
    html += "<input type='button' value='Delete' id='delete'/>";

    $("body").html(html);
    
    $("#delete").click(function(){
        
       $.ajax({
           method:'DELETE',
           url:'http://localhost:3000/persons/id=' + person_data._id,
           data:{user:localStorage.username},
       }).done(function(data){
           
           location.reload(true);
       });
        
    }); 
    
    $("#update").click(function(){
        
        person_data.name = $("#inputname").val();
        person_data.address = $("#inputaddress").val();
        person_data.age = $("#inputage").val();
        
       $.ajax({
           method:'PUT',
           url:'http://localhost:3000/persons/',
           data:person_data
           
       }).done(function(data){
           
           location.reload(true);
       });
        
    });
}

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