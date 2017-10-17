var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "taylorswift",
  database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM aniphonebook", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});