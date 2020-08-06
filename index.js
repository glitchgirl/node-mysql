var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});
 
connection.connect();
 
connection.query('select * from customers', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
connection.query('insert into products(name) values("yamulka")', function (error, results, fields) {
    if (error) throw error;
    console.log('inserted');
  });
connection.end();