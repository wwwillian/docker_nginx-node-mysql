const mysql = require('mysql')

const config = {
    host: 'mysql',
    user: 'root',
    password: 'docker',
    database:'docker'
};

const connection = mysql.createConnection(config)

const query = (sql, callBack) => {
  return connection.query(sql, callBack);
};

module.exports = {
  connection,
  query,
};