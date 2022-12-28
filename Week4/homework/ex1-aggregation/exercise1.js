const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
require('dotenv').config();
const { seedDatabase } = require("./seedDatabase.js");




 const TotalPopulationPerYear = async (client, country) => {
    const pipeline = [
      {
        $match: {
          Country: country,
        },
      },
    
      {
        $group: {
          _id: "$Year",
          countPopulation: {
         $sum :  { $add : {$toInt : "$M" , $toInt : "$F"}}
          },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ];

    const aggregation = client
      .db("databaseWeek4")
      .collection("population_pyramid")
      .aggregate(pipeline);

    

    await aggregation.forEach(result => {
      console.log(result)
      

    });
 
}

const filterMyContinents = async (client, age, year) => {
  const filtered = client
    .db("databaseWeek4")
    .collection("population_pyramid")
    .aggregate(
      [
        {
          '$match': {
            'Country': {
              '$in': [
                         'AFRICA',
                        'ASIA',
                        'EUROPE',
                        'LATIN AMERICA AND THE CARIBBEAN',
                        'NORTHERN AMERICA',
                        'OCEANIA',              ]
            },
            'Age': age,
            'Year': year
          }
        }, {
           $addFields: {
            TotalPopulation: {
              
                $add: [
                { $toInt: '$M'}, { $toInt: '$F'}
              ]
              }
            }
          
        }
      ]
    );
  await filtered.forEach((result) => {

    console.log(result);


  })

}


 async function main(){
if (process.env.MONGODB_URL == null) {
    throw Error(
      `You did not set up the environment variables correctly. Did you create a '.env' file and add a package to create it?`
    );
  }
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  try {
await client.connect();
  await seedDatabase(client);
await TotalPopulationPerYear(client,'Netherlands');

    await filterMyContinents(client, "100+", "2020");

  }
  catch(err){
    console.error(err)
  }
  finally{
    client.close();
  }



}
main();











   









