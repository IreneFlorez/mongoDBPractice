// START: Connect with Database.
const mongoose = require('mongoose');
const credentials = require('./credentials.js');

mongoose.connect(credentials.getMongoCredentials() , function (error) {
    if (error) {
        console.log("There a problem connecting to the database!" + error);
    } else {
        console.log("Database connected! All green!")
    }
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// END: Connect with Database.

var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema(
    {
        _id: Schema.Types.ObjectId,
        name: String,
        age: Number,
        valid: Boolean
    }
    );
    //Saves to the Foe Model (SQL: table)
var UserModel = mongoose.model('Foe', UserSchema);

// var myFirstInstance = new UserModel({
//         _id: '000000000000000000000007',
//         name: "Bill",
//         age: 28,
//         valid: true
// })

// myFirstInstance.save(function (error) {
//     if (error) {
//         console.log(error);

//     }
// })

// START: Read from Database

UserModel.find({name: "Minda"}, function (error, foes) {
    
    if (error) {
        console.log(error);
    }
    
    console.log(foes.toString());
});

// END: Read from Database..