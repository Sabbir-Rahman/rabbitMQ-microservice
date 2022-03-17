const mongoose = require('mongoose')
const express = require('express')

const { addProductInventory } = require('./controllers/inventoryController')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 5000
const basicRoutes = require('./routers/basicRouter')

async function dbconnect() {
  const dbUri = process.env.MONGODB_CONNECTION_URL

  try {
    await mongoose.connect(dbUri)
    console.log('Database connected')
  } catch (error) {
    console.log(error)
    console.log('Could not connect to db')
    process.exit(1)
  }
}

app.listen(PORT, async () => {
  console.log(`Server running on ${PORT}`)
  await dbconnect()
  await connect()
})

app.get('/', (req, res) => {
  res.send('Welcome from basic template of node')
})

app.use('/basic', basicRoutes)
// amqp = advance message queue protocol
const amqp = require('amqplib')


let ProductObj = []

async function connect() {
  let productObj = {}
  let addProduct
  

  try {
    const connection = await amqp.connect('amqp://localhost:5672')
    const channel = await connection.createChannel()
    // check queue exist or not if not then create
    const result = await channel.assertQueue('jobs')

    channel.consume('abc', message => {
      const input = JSON.parse(message.content.toString())
      console.log(
        `Product order is received with productId: ${input.productId}`
      )
      ProductObj.push(input)
      // again call the function
      connect()
      channel.ack(message)
    })

    
    // console.log(`Add product status: ${addProduct}`)

    // Product added
    for (let i = 0; i < ProductObj.length; i++) {
      await addProductInventory(ProductObj[i])
      ProductObj.splice(i,1)
    }

    console.log('Waiting for messages')
  } catch (ex) {
    console.error(ex)
  }

  
    
}

