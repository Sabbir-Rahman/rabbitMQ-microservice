const mongoose = require('mongoose')

//this is for replicating required
const requiredString = {
  type: String,
  required: true
}

const orderService = mongoose.Schema({
  orderId: mongoose.Types.orderService,
  productName: requiredString,
  quantity: Number,
  price: Number
})

module.exports = mongoose.model('orderService', orderService)
