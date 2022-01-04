const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require("mysql2"); 

app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    con.connect(function(err) {
        const mainDashQueries = "SELECT * FROM owners;SELECT * FROM appointments where availability = 'PENDING';"
        if (err) throw err;
        con.query(mainDashQueries, function (err, result, fields) {
          if (err) throw err;
          //console.log(result[1]);
          res.send(result);
        });
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

//---------------   MYSQL CONNECTION -----------


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "vms",
    connectionLimit: 5,
    multipleStatements: true,
});
