const mongoose = require('mongoose')

//this is for replicating required
const requiredString = {
  type: String,
  required: true
}

const orderStatus = mongoose.Schema({
  order: mongoose.Types.orderService,
  status: requiredString,
  message: String
})

module.exports = mongoose.model('orderStatus', orderStatus)
