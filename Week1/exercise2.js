const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
 
});

con.connect(() => {

    
 
    con.query('USE world',  (err, result) => {
        
    if (err) throw err;
    console.log('WORLD database is working');
   
    
    con.query("USE world");
  
    con.query('SELECT name, population FROM country WHERE population > 8000000',
    (err,result) => {
          
        if(err) throw err;
        console.log(result);



    })
    con.query('SELECT name FROM country WHERE name LIKE "%land%"', (err,result) => {
          
        if(err) throw err;
        console.log(result);



    });
    con.query('SELECT name , population FROM city WHERE population BETWEEN 500000 AND 1000000',(err,result) => {
          
        if(err) throw err;
        console.log(result);



    });
    con.query('SELECT name FROM country WHERE Continent = "Europe"',(err,result) => {
          
        if(err) throw err;
        console.log(result);



    });
    con.query('SELECT * FROM country ORDER BY surfaceArea DESC',(err,result) => {
          
        if(err) throw err;
        console.log(result);



    });
    con.query('SELECT name, population FROM city WHERE name = "Rotterdam"',(err,result) => {
          
        if(err) throw err;
        console.log(result);



    });
    con.query('SELECT name, surfaceArea FROM country ORDER BY surfaceArea DESC LIMIT 10',(err,result) => {
          
        if(err) throw err;
        console.log(result);



    });
    con.query('SELECT name, population FROM city ORDER BY population DESC LIMIT 10',(err,result) => {
          
        if(err) throw err;
        console.log(result);



    });
    con.query('SELECT SUM(population) FROM country',(err,result) => {
          
        if(err) throw err;
        console.log(result);



    }); 
    
  })
});