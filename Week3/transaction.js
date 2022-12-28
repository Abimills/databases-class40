const mysql = require('mysql');

const con = mysql.createConnection({
      
    host : 'localhost',
    user: 'hyfuser',
    password : 'hyfpassword',
    database : 'bank'



});

con.connect();

con.query(`START TRANSACTION`);
con.query(`UPDATE account SET balance = balance -1000 WHERE  account_number = 101`);
con.query(`UPDATE account SET balance = balance + 1000 WHERE  account_number = 102`);

con.query(`COMMIT`);
con.query(`INSERT INTO account_changes (change_number,account_number, amount, changed_date, remark)
              VALUES (12,101, 1000, '2022-12-05', 'christmas gift sent'),
              (13,102, 1000, '2022-12-06', 'christmas gift given ')`);

con.query(`SELECT * FROM account
WHERE account_number = 101


`,(err,result) => {
    if(err) throw err;
    console.log(result)
});
con.end();