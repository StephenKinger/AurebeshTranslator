'use strict';
var mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
  name: String,
  gender: { type: String, enum: ['male', 'female', 'hermaphrodite', 'n/a'] },
  skin_color: String,
  hair_color: String,
  height: String,
  eye_color: String,
  mass: String,
  birth_year: { type : String , match: /^[0-9]+BBY$/}
});

var Character = mongoose.model('Character', CharacterSchema);

function reloadDatabase() {
  mongoose.connect('mongodb://localhost/db', function(err) {
    if (err) { throw err; }
  });
  
  
  var db = mongoose.connection;
  db.on( 'error', console.error.bind( console, 'connection error:' ) );

  // once the connection is established we define our schemas
  db.once( 'open', function callback() {
    //Character.collection.drop();
    var item = new Character({name:'Luke Skywalker'});
    item.save();
   
    console.log("pring");
    var fs = require('fs');
    var mydocuments = fs.readFile('../datas/names.json', 'utf8', function (err, data) {
      JSON.parse(data).forEach(function (entry){
        console.log(entry.name);
        Character.findOne({'name': entry.name}, function(err, person){
          
          if (person === null) {
            console.log("Not found" + entry.name);
            console.log('addind new'+entry.toString());
            let item = new Character(entry);
            item.save();
          }
          else {
            console.log('Found '+ entry.name);
            person.update(entry);
            console.log('to be updated');
            console.log(entry);
            person.save();
          }
        });
        
      });
    });  
    console.log("after");
  } );

  

}

function loadNames(category, gender) {
  mongoose.connect('mongodb://localhost/db', function(err) {
    if (err) { throw err; }
  });
  return ["tutu", "titi", "tata", "otot", "toto", "oott"];
}

reloadDatabase();

exports.loadNames = loadNames;
