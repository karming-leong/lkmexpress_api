const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productsRouter = require('./routes/products.js')

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {

    res.json({
        "message": "Welcome to the API"
    })
})

app.use('./api/products', productsRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running at PORT" + PORT)

})