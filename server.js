var express = require("express");

var path = require("path");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());






var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "FriendFinder_db"
});




app.get("/", function () {


    connection.query("SELECT * FROM survey", function (err, data) {

        if (err) throw err; (data) 

        data.forEach(question => { var realquestion = question.question ; console.log(realquestion) });



    })
})

app.get("/friends", function () {


            
            connection.query("SELECT * FROM friends", function (err, data) {

                if (err) throw err; (data) 
        
                data.forEach(friend => { var realfriend = friend.friendName ; var score = friend.score ; console.log(realfriend , score ) });
        
        
        
            })



        })
    




app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});