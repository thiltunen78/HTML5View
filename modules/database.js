var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/oma',connectionStatus);

//connection callback for fail and ok cases
function connectionStatus(err,ok){
    
    if(err){
        
        console.log(err.message);
        
    }
    else{
        
        console.log("We are connected!");
    }
}

// luodaan malli collectionista
var Person = mongoose.model('Person',{    
    name:String,
    address:String,
    age:{type:Number,min:0,max:120}
},'person');

//using exports object you expose the data to other modules
exports.Person = Person;

exports.myFunction = function(){
    console.log("this is exported function");
};