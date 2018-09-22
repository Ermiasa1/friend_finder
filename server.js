express = require('express');
var app = express();
var mysql = require('mysql');



var bodyParser = require('body-parser');
	
	app.use(bodyParser.urlencoded({ extended: true }));
	
	app.use(bodyParser.json());

  /*
	this makes routes for everything in the public folder automatically based on its filepath

	and

	it automatically makes the root route go to index.html in the public folder
*/
app.use(express.static("app/public"));
var path = require("path");

var connection = mysql.createConnection({
	host: "localhost",
  
	// Your port; if not 3306
	port: 3306,
  
	// Your username
	user: "root",
  
	// Your password
	password: "abc",
	database: "friendFinder"
  });

app.post('/submit', function(req, res){
	// console.log( res.json(req.body));

	connection.query(
		"INSERT INTO friends (name, photo, score1, score2, score3, score4, score5, score6, score7, score8, score9, score10) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
		[req.body.name, req.body.photo, req.body.score1, req.body.score2, req.body.score3, req.body.score4, req.body.score5, req.body.score6, req.body.score7, req.body.score8, req.body.score9, req.body.score10],
		// [req.body],
		 function(err, response) {
	// 	  // res.redirect('/');
		  res.redirect('/match.html');
		}
	  );
  });




 app.get('/friends', function(req, res){
	connection.query(
		"SELECT * FROM friends",
		function(err, response) {
		  res.json(response);
		}
	  );
  });


  app.listen(3000, function(){
	console.log('listening on 3000');
});