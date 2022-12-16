const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user : 'hyfuser',
    password : 'hyfpassword',
    database : 'bank'
})

con.connect();
con.query('CREATE DATABASE  IF NOT EXISTS  bank');

con.query(`CREATE TABLE IF NOT EXISTS  account
(
    account_number INT AUTO_INCREMENT PRIMARY KEY,
    balance INT

)

`);
con.query(`CREATE TABLE IF NOT EXISTS account_changes
(
change_number INT AUTO_INCREMENT  PRIMARY KEY ,
account_number INT,
amount INT,
changed_date DATE ,
remark TEXT,
FOREIGN KEY(account_number) REFERENCES account(account_number)

)


`);

