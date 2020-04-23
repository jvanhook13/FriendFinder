
var express = require(`express`)
var mysql = require(`mysql`)
var path = require('path')
var handlebars = require(`express-handlebars`)


var app = express()
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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

//grab questions from my sql throw them to index.handlebars
app.get("/survey", function (req, res) {


    connection.query("SELECT * FROM survey", function (err, data) {

        if (err) throw err; (data) 

        data.forEach(question => { var realquestion = question.question ; res.render("index" , {realquestion}) ; return realquestion });



    })
})

//grab the friends table and teh names and scores and return them
app.get("/friends", function (req, res) {


            
            connection.query("SELECT * FROM friends", function (err, data) {

                if (err) throw err; (data) 
        
                data.forEach(friend => { var realfriend = friend.friendName ; var score = friend.score ; console.log(realfriend , score ) ; return score , realfriend });

        
        
            })



        })
    


//post the user answers and name into the database
    app.post("/uhh/:id" , function () {

         
        console.log(userScore)

    connection.query("INSERT INTO friends(friendName, score) VALUES (? , ?)" , [userName , userScore])

   


})

//regrab the new table of friends sorted by score, pull your ID and the one above and below
app.get("/friends", function (req, res) {


            
    connection.query("SELECT * FROM friends ORDER BY score DESC", function (err, data) {

        if (err) throw err; {


            console.table(data)

            var scorelist= data.friendName
            var index = scorelist.index.friendName

            let a = scorelist[index+1]
            let b = scorelist[index-1]

            console.log(a , b)


        } 

         



    })



})



    

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

 