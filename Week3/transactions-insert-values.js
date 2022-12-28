const mysql = require('mysql');

const con = mysql.createConnection({

   host : 'localhost',
   user : 'hyfuser',
   password : 'hyfpassword' ,

   database: 'bank'
})

con.connect();

con.query(`INSERT INTO account ( balance)

VALUES 
(30000),
(30000),
(40000),
(60000)

          





`)
con.query(`INSERT INTO account_changes  (account_number, amount,changed_date,remark)
VALUES
(101,1000,'2022-11-1','Grocery'),
(102,3000,'2022-12-24','Christmas'),
(103,2000,'2023-1-1','new year'),
(102,1000,'2023-1-1','new year')


`);
con.end();
