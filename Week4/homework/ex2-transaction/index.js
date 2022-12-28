const { MongoClient, ServerApiVersion } = require('mongodb');
const setup  = require('./setup.js');
const transactions = require('./transfer.js');
const dotenv = require('dotenv');
dotenv.config();

async function main() {
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
        await setup(client);
        await transactions(client, 101, 102, 1000, "Christmas Gift");

    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}

main();