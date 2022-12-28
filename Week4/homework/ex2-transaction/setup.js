const setup = async (client) => {

await client.db('databaseWeek4').collection('accounts').drop();
await client.db('databaseWeek4').createCollection('accounts');
await client.db("databaseWeek4").collection("accounts").deleteMany({});
await client.db('databaseWeek4').collection('accounts').insertMany([
 {
  account_number: 101,
                balance: 20000,
                account_changes: [
                    {
                        change_number: 30,
                        amount: 1000,
                        changed_date: "2020-12-23 07:00:00",
                        remark: "Grocery",
                    },
                ],


         },
         {
  account_number: 102,
                balance: 25000,
                account_changes: [
                    {
                        change_number: 31,
                        amount: 2000,
                        changed_date: "2020-12-23 07:00:00",
                        remark: "Gifts",
                    },
                ],


         },
         {
  account_number: 103,
                balance: 40000,
                account_changes: [
                    {
                        change_number: 32,
                        amount: 8000,
                        changed_date: "2020-1-30 12:00:00",
                        remark: "Engagement Ring",
                    },
                ],


         },
         {
  account_number: 104,
                balance: 10000,
                account_changes: [
                    {
                        change_number: 33,
                        amount: 200,
                        changed_date: "2020-3-30 10:00:00",
                        remark: "expenses",
                    },
                ],


         },






])



}

module.exports = setup;