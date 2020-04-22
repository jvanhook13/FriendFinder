var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "FriendFinder_db"
  });

  connection.query("SELECT * FROM friends" , function(err, res) {

    if (err) throw err ; {

        console.log(res)

    }



  })