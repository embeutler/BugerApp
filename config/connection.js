var mysql = require("mysql");

/* var connection = mysql.createConnection({
  host: process.env.MySQL_Database_host,
  port: process.env.PORT || 3306,
  user: "root",
  password: process.env.MySQL_Database_Password,
  database: "burgers_db"
}); */

var connection;
if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
       port: 3306,
       host: process.env.MySQL_Database_host,
       user: 'root',
       password: "*Smile8066",
       database: "burgers_db"
   })
};
 
// connections
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export for ORM to use.
module.exports = connection;