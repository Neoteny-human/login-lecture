const mysql = require("mysql");

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'bbs',
});

db.connect();

module.exports = db;