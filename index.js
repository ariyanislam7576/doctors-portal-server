const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient } = require('mongodb');

require('dotenv').config()
const port = process.env.PORT || 5000
//user name doctors12
//password 9rIiYkOHJvAvy5Fu

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ox5tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



async function run(){
    try{
        await client.connect();
        console.log('database connected');
    }
    finally{
        // await client.close()
    }
}

run().catch(console.dir)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log('listening to port ', port);
})