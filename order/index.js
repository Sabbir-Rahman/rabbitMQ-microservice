const express = require('express')
const app = express()

const PORT = process.env.PORT || 5002
const basicRoutes = require('./routers/basicRouter') 

app.listen(PORT,()=> {
  console.log(`Server running on ${PORT}`)
})

app.get('/',(req,res)=> {
    res.send('Welcome from basic template of node')
})

app.use('/basic',basicRoutes)

