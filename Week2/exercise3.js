const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'hyfuser',
    password:'hyfpassword',
    database :'authors_database'
});

con.connect((err,result) => {
if(err) throw err;
    console.log('you are connected to db');
})

con.query(`SELECT author_name, mentor FROM authors`, (err,result) => {
    if (err) throw err;
    // console.log(result)
})

con.query(`SELECT author_name,paper_title FROM authors
      LEFT JOIN authors_paper_research
      ON authors.author_id = authors_paper_research.author_id
      LEFT JOIN  research_Papers
      ON authors_paper_research.paper_id = research_papers.paper_id`, (err,result) => {
    if(err) throw err;
    console.log(result);
})






