const transactions = async (client,sender,receiver,amount,remark) => {

const session = client.startSession();



try{


    await session.withTransaction(async() => {
 const mySender = await client.db('databaseWeek4').collection('accounts').findOne({
    account_number : sender
})

  await
  
  client.db("databaseWeek4")
                .collection("accounts")
                .updateOne(
                    { account_number: sender },
                    {
                        $inc: { balance: -amount },
                        $push: {
                            account_changes: {

                              $inc : {change_number: +1},
                                amount: -amount,
                                date: new Date(),
                                remark: remark,
                            },
                        },
                    },
                    { session })



                     await client
                .db("databaseWeek4")
                .collection("accounts")
                .updateOne(
                    { account_number: receiver },
                    {
                        $inc: { balance: +amount },
                        $push: {
                            account_changes: {
                             $inc:{change_number:+1},
                                amount: amount,
                                date: new Date(),
                                remark: remark,
                            },
                        },
                    },
                    { session }
                )
              console.log(`you just transfered ${amount} from account ${sender} to account ${receiver}`)

    })
}

catch(err) {
console.error(err)
await session.abortTransaction();
}
finally{
    await  session.endSession();
}









}

module.exports = transactions;



