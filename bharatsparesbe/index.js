import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import logger from './app/logger/logger.js'
import versions from './app/versions/index.js'

dotenv.config()
const PORT = process.env.PORT || 8000

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(express.json({limit: "1000mb"}))

app.use("/api", versions)

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