const orderService = require('../model/orderService')

// amqp = advance message queue protocol
const amqp = require("amqplib")
var channel, connection
async function connect() {
  try {
    connection = await amqp.connect("amqp://localhost:5672")
    channel = await connection.createChannel()
    // check queue exist or not if not then create
    await channel.assertQueue("abc")
  } catch (ex) {
    console.error(ex)
  }
}

const createOrder = async (req, res) => {
  connect()
  const { productId, productName, quantity, price } = req.body

  const newOrderService = {
    productId,
    productName,
    quantity,
    price
  }

  const response = await orderService.create(newOrderService)

  await channel.sendToQueue('abc', Buffer.from(JSON.stringify(response)))
  console.log(`Job sent successfully ${response}`)
  await channel.close()
  await connection.close()

  return res.status(200).json(response)
}

module.exports = { createOrder }
