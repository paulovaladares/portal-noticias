var mysql = require('mysql');

var connMySQL = () => {
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'mysql',
		database : 'portal_noticias'
	});
}

module.exports = () => {
	return connMySQL;
}