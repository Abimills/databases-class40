// const data = require("./population_pyramid_1950-2022.csv");
const csvtojson = require('csvtojson');
/**
 * This function will drop and recreate the collection of sample data in our csv file.
 * By doing this we ensure that your functions are working on the same data, very similar to how you would set up a test environment.
 *
 * @param {MongoClient} client - The client that is connected to your database
 */

const seedDatabase = async (client) => {
    const data = await csvtojson().fromFile(
        'population_pyramid_1950-2022.csv',
    );
    await client.db('databaseWeek4').collection('population_pyramid').deleteMany();
    const result = await client
        .db('databaseWeek4')
        .collection('population_pyramid')
        .insertMany(data);
};

module.exports = {
  seedDatabase,
};
