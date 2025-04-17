const cors = require("cors")
const express = require('express')
const pool = require("./indebd.js")
const PORT = process.env.PORT || 3000
const app = express()
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt.js');
const User = require('./User.js');
const corsOption = {
    origin:"http://localhost:5173"
}
app.use(bodyParser.json());
app.use(cors(corsOption))
app.listen(PORT, ()=>{
    console.log(`server starting ${PORT}`)
})

app.get("/users",async(req,res)=>{
    try{
        const addTodor = await pool.query("SELECT * FROM users")
        res.json(addTodor.rows)
    }
    catch(err){
        console.error(err.message)
    }
})