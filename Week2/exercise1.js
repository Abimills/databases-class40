const mysql = require('mysql');


const con = mysql.createConnection({
    host: 'localhost',
    user:'hyfuser',
    password:'hyfpassword',
    database :'authors_database'
});

con.connect(() => {
    con.query('CREATE DATABASE IF NOT EXISTS authors_database',(err,result) => {
        if (err) throw err;
        console.log('created a database called authors')
        
    })
    
})

       


                   con.query(`CREATE TABLE IF NOT EXISTS authors(
                      
                     author_id INT AUTO_INCREMENT, 
                    author_name  VARCHAR(255),
                    university VARCHAR(255),
                    date_of_birth DATE,
                    h_index INT,
                    gender ENUM('M','F'),
                     PRIMARY KEY (author_id)

                   )`
                   
                   ,(err,result) => {
                    if(err) throw err;
                    console.log('err');
                    console.log(result);
                   }
                   )
                   con.query(`ALTER TABLE authors 
                   ADD COLUMN mentor INT 
                   `);

                   con.query(` ALTER TABLE authors
                   ADD FOREIGN KEY(mentor) REFERENCES authors(author_id)
                   `)

                  
              
     


   
