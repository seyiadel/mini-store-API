const express = require('express')
const app = express()
const connectDatabase = require('./config/database')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')

connectDatabase();

app.use(express.json());
app.use('/api/v1/',{userRouter, productRouter, cartRouter });

const port = 3000

app.listen(port, ()=>{
    console.log(`Server is running on localhost:${port}`);
})