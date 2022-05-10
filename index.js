const express = require('express');
const cors = require('cors');
const { get } = require('express/lib/response');
const port = process.env.PORT || 5000;

const app = express()

// user name: user-information
// pass: VwAr5MWrQHnBpvyi

// meddleWere
app.use(cors());
app.use(express.json());



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user-information:VwAr5MWrQHnBpvyi@cluster0.br82r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const Customer = client.db('customer').collection("customer-information");

        // find multiple customer 
        app.get('/customers', async (req, res) => {
            const query = {};
            const cursor = Customer.find(query);
            const information = await cursor.toArray();
            res.send(information);
        })

        // insert a customer information
        app.post('/customers', async (req, res) => {
            const newCustomer = req.body;
            const result = await Customer.insertOne(newCustomer);
            res.send(result);
        })
    }
    finally {

    }

}
run().catch(console.dir)



app.get('/', (req, res) => {
    res.send('customer server is running')
})

app.listen(port, () => {
    console.log("listening to port 5000");
})