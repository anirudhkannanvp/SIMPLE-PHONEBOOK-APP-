var mysql = require('mysql');
var http = require('http');
var formidable = require('formidable');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "taylorswift",
  database: "mydb1"
});

/*
con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO aniphonebook (name, number) VALUES ('Anirudh', '9566079994')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records added: " + result.affectedRows);
  });
});
*/

/*
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM aniphonebook", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/

/*
con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM aniphonebook WHERE name = 'Anirudh'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
*/

con.connect(function(err) {
  if (err) throw err;
  console.log("YOU ARE CONNECTED INTO AWESOME DATABASE OF ANIRUDH");
  http.createServer(function(req, res) {
    if(req.url=='/anirudh')
    {
        var form1=new formidable.IncomingForm();
        form1.parse(req,function(err,fields){
             if (err) throw err;
             var ANAME =fields.name,ANUMBER=fields.number;
             var command = 'INSERT INTO aniphonebook VALUES ("'+ANAME+' ","' +ANUMBER+ ' ");';
             con.query(command,function(err,result){
                if (err) throw err;
             });
             var sel = 'SELECT * FROM aniphonebook WHERE name  = "'+ANAME+' ";'; 
             if (err) throw err;
             con.query(sel,function(err,result){
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('<body bgcolor="yellow"><h1><center><marquee><strong>ANIRUDH PHONE BOOK</strong></marquee></center></h1><img src="http://www.psdgraphics.com/file/phone-book-icon.jpg"><br><br><b> THE NUMBERS YOU WANTED ARE:- </b><br><br>');
                var j=0;
                while(j<result.length)
                {
                    res.write('<strong>'+result[j].number+'<br> </strong>');
                    j+=1;
                }
                res.write('<br><br><p><strong><center>&copy ALL RIGHTS RESERVED BY ANIRUDH KANNAN</strong></center></p><br><br>');
                res.end();
        });
        });
    }
  else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<body bgcolor="yellow"><h1><center><marquee><strong>ANIRUDH PHONE BOOK</strong></marquee></center></h1><img src="http://www.psdgraphics.com/file/phone-book-icon.jpg"><form action="anirudh" method="post"  enctype="multipart/form-data" > <br><br><strong>Name: </strong><input type="text" name="name"> <br><br><strong>PhoneNumber: </strong><input type="text" name="number"> <br><br><strong>SUBMIT: <br></strong><input type="submit" name="save"></form>');
    res.write('<br><br><p><strong><center>&copy ALL RIGHTS RESERVED BY ANIRUDH KANNAN</center></strong></p><br><br>');
    res.end();
    }
    }).listen(8432);
});