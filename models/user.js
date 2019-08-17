var mysql=require('mysql')
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'akul_g123',
	database : 'student'
});

exports.connection=connection;