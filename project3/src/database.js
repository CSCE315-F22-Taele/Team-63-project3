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

app.get('/supplydate', async(req,res)=>{
    column = req.body.column
    date = req.body.date
    const data = await pool.query("select " + column + " FROM \"supply\" where orderdate = '"+date+"';")
    res.json(data.row)
    res.end()
})

app.get('/column', async(req,res)=>{
    const data = await pool.query("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = 'supply';")
    res.json(data.rows)
    res.end()
})
//This is going to pull the data from the order table
app.get('/order', async(req,res)=>{
    const data = await pool.query("select * from \"order\";");
    res.json(data.rows);
    res.end()
});

app.get('./certainorder',async(req,res)=>{
    const startdate = req.body.startdate
    const enddate = req.body.enddate
    const data = await pool.query("select * from \"order\" where orderdate>='"+startdate+"' and orderdate <= '"+enddate+"';")
    res.json(data.rows)
    res.end;
})

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

app.post("/updatefood",async(req,res)=>{
    const foodId = req.body.foodId;
    const foodItem = req.body.foodItem;
    const price = req.body.price

    pool.query(
        "UPDATE \"food\" SET fooditem=\'"+foodItem+"\',price="+price+" WHERE foodid="+foodId+";",
        (err,result) =>{
            if (err) {
                console.log("that rat can cook fr!");
                console.log("UPDATE \"food\" SET fooditem=\'"+foodItem+"\',price="+price+" WHERE foodid="+foodId+";");
                console.log(err);
            } else {
                res.send("Food table has successfully been updated with the new item!");
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
    console.log("INSERT INTO \"order\" (orderid, foodid, quantity, orderdate, amount) VALUES("+orderId+","+foodId+","+quantity+",'"+orderdate+"',"+amount+");");
    pool.query(
        "INSERT INTO \"order\" (orderid, foodid, quantity, orderdate, amount) VALUES("+orderId+","+foodId+","+quantity+",'"+orderdate+"',"+amount+");",
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
    const supplyItem = req.body.supplyItem;
    

    pool.query(
        "alter table \"supply\" add \""+supplyItem+"\" int;",
        (err,result) =>{
            if (err){
                console.log("pool hopping");
                console.log(err)
            }
            else{
                res.send("Value inserted in food database")
            }
        }
    );

    
});

app.post("/newsupply",async(req,res)=>{
    const supplyItem = req.body.supplyItem;
    const supplyQuantity = req.body.quantity;
    const orderdate = req.body.orderdate;
    pool.query(
        "update \"supply\" set \""+supplyItem+"\" = "+supplyQuantity+" where date>='"+orderdate+"';",
        (err,result) =>{
            if (err){
                console.log("window shopping");
                console.log("update \"supply\" set "+supplyItem+" = "+supplyQuantity+" where date>='"+orderdate+"';");
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