const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv').config();
const cors = require('cors');
// Create express app
const app = express();
const port = 5000;
// Create pool
const pool = new Pool({
    user: "csce331_905_john",
    host: 'csce-315-db.engr.tamu.edu',
    database: "csce331_905_63",
    password: "john",
    port: "5432",
    ssl: {rejectUnauthorized: false}
});

app.use(cors());
app.use(express.json());

//This is going to pull all the data from the sql database
//This is going to pull the data from the supply table
app.get('/supply', async (req, res) => {
    const team = await pool.query('select * FROM \"supply\";');
    res.json(team.rows);
    res.end();
  
});
//This is going to pull the data from the order table
app.get('/order', async(req,res)=>{
    const data = await pool.query("select * from \"order\";");
    res.json(data.rows);
    res.end()
});
//This is going to be pulling the data from the food table
app.get("/food", async(req,res)=>{
    const data = await pool.query("select* from \"food\";");
    res.json(data.rows);
    res.end;
});

app.post("/insertfood", async(req,res)=>{
    console.log("It is in");
    const foodId = req.body.foodId;
    const foodItem = req.body.foodItem;
    const price = req.body.price;
    const supply = req.body.supply;


    pool.query(
        "INSERT INTO \"food\" (foodid, fooditem, price, supplies) VALUES("+foodId+", '"+foodItem+"',"+price+", '"+supply+"');",
        // [foodId,foodItem,price,supply],
        console.log("INSERT INTO \"food\" (foodid, fooditem, price, supplies) VALUES(?,?,?,?);",
        [foodId,foodItem,price,supply],),
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send("Value inserted in food database")
            }
        }
    );
});

app.post("/insertorder", async(req,res)=>{
    const orderId = req.body.orderId;
    const foodId = req.body.foodId;
    const quantity = req.body.quantity;
    const orderdate = req.body.orderdate;
    const amount = req.body.amount;

    pool.query(
        "INSERT INTO \"order\" (orderid, foodid, quantity, orderdate, amount) VALUES(?,?,?,?,?);",
        [orderId,foodId,quantity,orderdate,amount],
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send("Value inserted in food database")
            }
        }
    );
});

app.post("/insertsupply", async(req,res)=>{
    const supplyItem = req.body.foodId;
    const supplyQuantity = req.body.quantity;
    const orderdate = req.body.orderdate;

    pool.query(
        "alter table \"supply\" add ? int;",
        [supplyItem],
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send("Value inserted in food database")
            }
        }
    );

    pool.query(
        "update ? set ? = ? where date>=?;",
        [supply,supplyItem,supplyQuantity,orderdate],
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send("Value inserted in food database")
            }
        }
    )
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});










