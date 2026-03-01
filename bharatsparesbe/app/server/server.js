import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const PORT=process.env.PORT
const server = express()
server.get("/", (req, res) => {
    res.send("hello")
})

console.log(PORT)
server.listen(PORT, () => {console.log("Server Connected")})

export {server}