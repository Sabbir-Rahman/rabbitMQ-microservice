const mongoose = require('mongoose')

//this is for replicating required
const requiredString = {
  type: String,
  required: true
}

const inventoryRequestService = mongoose.Schema(
  {
    productId: mongoose.Types.ObjectId,
    productName: String,
    quantity: Number,
    price: Number
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('inventoryRequestService', inventoryRequestService)
