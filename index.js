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


app.get('/', (req, res) => {
    res.send('customer server is running')
})

app.listen(port, () => {
    console.log("listening to port 5000");
})