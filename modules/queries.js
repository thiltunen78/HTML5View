var db = require('./database');

// this function gets all documents from person collection
exports.getAllPersons = function(req,res){
    
    db.Person.find(function(err,data){
        
       if(err){
           console.log(err.message);
           res.send("Error in database");
       }
        else{
            res.send(data);
        }
           
    });
}

// this function searches database by name or by begin letters of name
exports.findPersonsByName = function(req,res){
    
    var name = req.params.nimi.split("=")[1];
    
    db.Person.find({name:{'$regex': '^' + name,'$options':'i'}},function(err,data){ //ilman hattua(^) hakee jos teksti sisältyy johonkin kohtaan nimiä
        
       if(err){           
           res.send("Error");
       }
        else{
            res.send(data);
        }           
    });
}
                          
// this function saves new person information to our person collection
exports.saveNewPerson = function(req,res){
    
    var personTemp = new db.Person(req.body);
    //save it to database
    personTemp.save(function(err,ok){
        // make a redirect to root context
        res.redirect('/');
    });
}

//this function removes one person from our person collection
exports.deletePerson = function(req,res){
    
    //what happens here is that req.params.id return "id=4858745834753485".
    //split function splits the string from "=" and creates an array where [0] contains "id" and [1] contains "4858745834753485".
    var id = req.params.id.split("=")[1];
    
    db.Person.remove({_id:id},function(err){
        
        if(err){
            res.send(err.message);
        }
        else{
            res.send("Delete Ok");
        }
    });
}

//this method updates one person info
exports.updatePerson = function(req,res){
    
    var updateData = {
        name:req.body.name,
        address:req.body.address,
        age:req.body.age
    }
    
    db.Person.update({_id:req.body._id},updateData,function(err){
       res.send("updated"); 
    });
}