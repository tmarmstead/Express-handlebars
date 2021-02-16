const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Todayb4tomorrow",
    database: "cat_db"
});

connection.connect(function(err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connectin.threadId}`);
});

nodule.exports = connection;