const mysql = require("mysql");

//  server
var pool = mysql.createPool({
  // host: "mysql-db",
  host: "localhost",
  user: "admin",
  password: "admin",
  port: "3306",
  database: "vending_machine",
});

function query(cmd, param) {
  return new Promise((resolve, reject) => {
    pool.query(cmd, param, function (err, result) {
      if (err) throw err;
      return resolve(JSON.parse(JSON.stringify(result)));
    });
  });
}

module.exports = { query };
