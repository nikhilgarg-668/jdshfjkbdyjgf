const express=require("express");
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
 const products=[
    {name:'Product 1' ,price:100.0,rating:'4.8',discount:63,availability:'yes'},
    {name:'Product 2',price: 80.0,rating:'3.8',discount:43,availability:'out-of-stock'},
    { name: 'Product 3', price: 75.00,rating:'4.5',discount:53,availability:'yes' },
    { name: 'Product 4', price: 60.00,rating:'4.0',discount:65,availability:'yes' },
    { name: 'Product 5', price: 50.00,rating:'4.1',discount:33,availability:'yes' },
 ];

 app.get('/products',(req,res)=>{
    res.json(products);
 });


 app.listen(port,()=>{
    console.log('Server runnning at http://localhost:${port}');
 });