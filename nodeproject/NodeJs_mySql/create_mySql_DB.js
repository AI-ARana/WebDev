var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a database named "mydb":*/
    con.query("create database nodeDB1", function (err, result) {
        if (err) throw err;
        console.log("Database created Sucessfully");
    });
});