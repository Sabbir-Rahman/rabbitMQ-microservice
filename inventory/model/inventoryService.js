const mongoose = require('mongoose')

//this is for replicating required
const requiredString = {
  type: String,
  required: true
}

const inventoryService = mongoose.Schema({
  productId: mongoose.Types.orderService,
  productQuantity: Number,
  productPrice: Number
})

module.exports = mongoose.model('inventoryService', inventoryService)
