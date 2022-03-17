const orderService = require('../model/orderService')

const createOrder = async (req, res) => {
  const { productId, productName, quantity, price } = req.body

  const newOrderService = {
    productId,
    productName,
    quantity,
    price
  }

  const response = await orderService.create(newOrderService)
  return res.status(200).json(response)
}

module.exports = { createOrder }
