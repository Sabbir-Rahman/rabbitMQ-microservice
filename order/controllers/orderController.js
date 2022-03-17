const orderService = require('../model/orderService')

// amqp = advance message queue protocol
const amqp = require("amqplib")
var channel, connection
async function connect() {
  try {
    connection = await amqp.connect("amqp://localhost:5672")
    channel = await connection.createChannel()
    // check queue exist or not if not then create
    await channel.assertQueue("order")
  } catch (ex) {
    console.error(ex)
  }
}

const createOrder = async (req, res) => {
  connect()
  let response 
  const { productId, productName, quantity, price } = req.body

  const newOrderService = {
    productId,
    productName,
    quantity,
    price
  }

  const newOrder = await orderService.create(newOrderService)

  await channel.sendToQueue('order', Buffer.from(JSON.stringify(newOrder)))
  console.log(`Job sent successfully ${newOrder}`)


  await channel.consume('inventory', message => {
    const input = JSON.parse(message.content.toString())
    response = input
    channel.ack(message)
  })

  await channel.close()
  await connection.close()
  
  return res.status(200).json(response)
}

module.exports = { createOrder }
