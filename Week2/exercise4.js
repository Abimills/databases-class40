const mysql = require('mysql');

const con = mysql.createConnection({
        
    host : 'localhost',
    user : 'hyfuser',
    password: 'hyfpassword',
    database:'authors_database'





})
con.connect((err,result) => {
    if (err) throw err;

})

// 1.All research papers and the number of authors that wrote that paper.

con.query(`SELECT paper_title, COUNT(authors.author_name) AS 'number_of_authors'  FROM authors
            
             JOIN authors_paper_research 
             ON  authors.author_id = authors_paper_research.author_id

             JOIN research_papers
             ON authors_paper_research.paper_id = research_papers.paper_id

             GROUP BY research_papers.paper_title;



`, (err,result) => {
    if(err) throw err;
    // console.log(result);
}
)

// 2.Sum of the research papers published by all female authors.

con.query(`SELECT  COUNT(research_papers.paper_title) AS 'research_made_by_women'  FROM authors
            
             JOIN authors_paper_research 
             ON  authors.author_id = authors_paper_research.author_id

             JOIN research_papers
             ON authors_paper_research.paper_id = research_papers.paper_id

             WHERE authors.gender = 'F';
             



`, (err,result) => {
    if(err) throw err;
    // console.log(result);
}
)
// 3. Average of the h-index of all authors per university.
con.query(`SELECT university, AVG(authors.h_index) AS 'h_index_per_university'  FROM authors
            
             GROUP BY university;
             



`, (err,result) => {
    if(err) throw err;
    // console.log(result);
}
)
// 4. Sum of the research papers of the authors per university.
con.query(`SELECT university,  COUNT(research_papers.paper_title) AS 'sum_of_research_papers'  FROM authors
            
             JOIN authors_paper_research 
             ON  authors.author_id = authors_paper_research.author_id

             JOIN research_papers
             ON authors_paper_research.paper_id = research_papers.paper_id

             GROUP BY  university;


             



`, (err,result) => {
    if(err) throw err;
    // console.log(result);
}
)

// minimum of the h-index of all authors per university.
con.query(`SELECT university, MIN(authors.h_index) AS 'MIN_h_index_per_university'  FROM authors
            
             GROUP BY university;
             



`, (err,result) => {
    if(err) throw err;
    console.log(result);


}

// maximum of the h-index of all authors per university.
)
con.query(`SELECT university, MAX(authors.h_index) AS 'MAX_h_index_per_university'  FROM authors
            
             GROUP BY university;
             



`, (err,result) => {
    if(err) throw err;
    console.log(result);
}
)