const { query } = require("express")
const Pool = require("pg").Pool

const Pool = new Pool({
    user:"postgres",
    password:"Kant2017",
    host:"localhost",
    port:"5432",
    datebase:"postgres"
})

module.exports = {
    query:(text,params)=> pool.query(text,params)
}
