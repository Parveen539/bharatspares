import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import logger from './app/logger/logger.js'

dotenv.config()
const PORT = process.env.PORT || 8000

const app = express()


app.use(express.json({limit: "1000mb"}))

app.get("/", (req, res, next) => {
    const err = new Error("Something went wrong")
    err.status = 500
    next(err)
})

// Logger : this must be last middleware
app.use((err, req, res, next) => {
    logger.error({
        message: err.message,
        stack: err.stack,
        method: req.method,
        url: req.originalUrl
    })

    res.status(err.status || 500).json({
        success : false,
        message : err.message || "Internal Server Error"
    })
})

app.listen(PORT, (err) => {
    if(err) console.error(err)
    console.log(`\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)    
    console.log(` SERVER STARTED AT PORT : ${PORT}`)
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n`)    
})