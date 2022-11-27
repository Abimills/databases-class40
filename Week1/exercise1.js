const express =require('express');
const mysql = require('mysql');

const app = express();

const database = mysql.createConnection({
 host  : 'localhost',
  user     : 'ab',
  password : 'Abel1234.',


});


database.connect( () =>{
 
  database.query('CREATE DATABASE IF NOT EXISTS meetup',  (err, result) => {
    
    if (err) throw err;
    console.log("created a database");
    console.log(result);
    

  database.query('USE meetup',  (err, result) => {
   
    if (err) throw err;
    console.log('using database');
    console.log(result);


database.query( `CREATE TABLE IF NOT EXISTS Invitee (
    invitee_no INT 
    , invitee_name VARCHAR(80)
    ,invited_by VARCHAR(130)
    
    )` )
    let thisSql =
database.query(
`CREATE TABLE IF NOT EXISTS  Room (
    room_no INT 
    , room_name VARCHAR(80)
    ,floor_number  INT
    
    )` 
    
    
    )
database.query(`CREATE TABLE  IF NOT EXISTS Meeting (
    meeting_no INT
    , meeting_title VARCHAR(80)
    ,starting_time DATETIME,
    ending_time DATETIME,
    room_no INT
 
    
    )`)

    database.query(`INSERT INTO Invitee
    
    Value(1,'sam','jackson'),
    (2,'Messi', 'Loinele'),
    (3,'Ronaldo', 'Cristiano'),
    (4,'van', 'dike'),
    (5,'mendy', 'selfie')
    
    
    `)
    database.query(`INSERT INTO Room
    
    Value(1,'upper office',3),
    (2,'lower office', 1),
    (3,'cafeteria', 5),
    (4,'recreation', 8),
    (5,'international office', 34)
    
    
    `)
    database.query(`INSERT INTO Meeting
    
    Value(1,' upgrade meeting', '2022-12-12 10:00:00','2022-12-19 12:00:00',3),
    (2,'monthly meeting', '2022-12-12 10:00:00','2022-12-19 12:00:00', 1),
    (3,'daily standup meeting','2022-12-12 10:00:00','2022-12-19 12:00:00', 5),
    (4,'employee of the month meeting', '2022-12-12 10:00:00','2022-12-19 12:00:00', 8),
    (5,'managing meeting ', '2022-12-12 10:00:00','2022-12-19 12:00:00', 34)
  
    
    
    `)



  });
})
  });