var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "taylorswift",
  database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM aniphonebook WHERE name = 'Anirudh";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});