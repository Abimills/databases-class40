const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user: 'hyfuser',
    password:'hyfpassword',
     database :'authors_database'
});

con.connect( (err,result) => {
if(err) throw err;
})




   con.query(` CREATE TABLE IF NOT EXISTS research_papers
                ( 
                 paper_id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
                 paper_title VARCHAR(255),
                 conference VARCHAR(255),
                 publish_date DATE 
                 )

                 `)
                 
                 con.query(`CREATE TABLE IF NOT EXISTS authors_paper_research(

                
                  author_id INT,
                  paper_id INT,
                  PRIMARY KEY (author_id, paper_id),
                  FOREIGN KEY(author_id) REFERENCES  authors(author_id),
                  FOREIGN KEY(paper_id) REFERENCES research_papers(paper_id)



                  
                  
                  )`)
                  
            
              
                




    con.query(`INSERT INTO authors (author_name, university, date_of_birth, h_index, gender,mentor)
VALUES
 ('andrew','EIT','2011-1-12',3, 'F',9),
 ('jack','EMIT','2013-1-12',3, 'M',10),
 ('fortuna','MIT','2013-12-1',18, 'F',15),
('san','MIT','2000-4-12',01, 'M',16),
('messi','MIT','1990-2-12',22, 'M',32),
('neymar','EIT','2010-2-12',10, 'F',9),
('dimaria','MIT','2001-1-12',2, 'M',32),
('ronaldo','EIT','2009-5-12',3, 'F',15),
('naomi','MIT','2003-3-12',11, 'M',16),
('joel','MIT','2004-3-12',19, 'F',9),
('jack','EIT','2005-1-12',18, 'F',9),
('jhonson','EIT','2006-2-12',17, 'F',10),
('miller','EIT','2007-8-12',12, 'M',9),
('mills','EIT','2008-9-12',13, 'F',10),
('andom','MIT','2009-10-12',14, 'M',16)
  



`, (err,result) => {
    if(err) throw err;
    console.log(result
        );
    })  


    con.query(`INSERT INTO research_papers (paper_title,conference,publish_date) 
    
    
    VALUES 
    ('research 1','Electric Management', '2022-10-10'),
    ('research 2','Mechanical Management', '2022-12-10'),
    ('research 3','Electric Management', '2022-10-10'),
    ('research 4','Mechanical Management', '2022-12-10'),
    ('research 5','Electric Management', '2022-12-10'),
    ('research 6','Electric Management', '2022-12-10'),
    ('research 7','Mechanical Management', '2022-12-10'),
    ('research 8','Electric Management', '2022-12-10'),
    ('research 9','Mechanical Management', '2022-12-20'),
    ('research 10','Technical Management', '2022-12-10'),
    ('research 11','Electric Management', '2022-12-10'),
    ('research 13','Mechanical Management', '2022-12-20'),
    ('research 14','Mechanical Management', '2022-10-10'),
    ('research 15','Technical Management', '2022-12-20'),
    ('research 16','Electric Management', '2022-10-20'),
    ('research 17','Technical Management', '2022-12-10'),
    ('research 18','Technical Management', '2022-12-10'),
    ('research 19','Electric Management', '2022-10-20'),
    ('research 20','Technical Management', '2022-12-10'),
    ('research 21','Electric Management', '2022-12-10'),
    ('research 22','Mechanical Management', '2022-12-20'),
    ('research 23','Electric Management', '2022-10-10'),
    ('research 24','Technical Management', '2022-12-20'),
    ('research 25','Electric Management', '2022-10-10'),
    ('research 26','Mechanical Management', '2022-12-10'),
    ('research 27','Electric Management', '2022-12-10'),
    ('research 28','Technical Management', '2022-10-20'),
    ('research 29','Mechanical Management', '2022-12-10'),
    ('research 30','Electric Management', '2022-10-10')
   
    
    
    
    
    
    
    `)
    
    con.query(`INSERT INTO authors_paper_research (author_id,paper_id)
    
    VALUES
    (64,2),
    (32,5),
    (68,14),
    (67,5),
    (73,7),
    (74,15),
    (61,1),
    (69,2),
    (67,10),
    (63,14),
    (61,3),
    (72,4),
    (74,6),
    (81,12),
    (61,1)
    
    
    
    `)