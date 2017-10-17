var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "taylorswift",
  database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO aniphonebook (name, number) VALUES ('Anirudh', '9566079994')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records added: " + result.affectedRows);
  });
});