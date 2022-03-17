const inventoryService =  require('../model/inventoryService')
const inventoryRequestService = require('../model/inventoryRequestService')

// product check and create if not exist
const productOrderInventory = async (productObj) => {
  const productExist = await inventoryService.find({ "productId": productObj.productId}).limit(1)
  
  if(productExist.length > 0) {
    console.log(`Product exist in inventory already exist for id:${productObj.productId}`)

    if (productExist[0].quantity < productObj.quantity) {
      const message = `Need quantity:${productObj.quantity} is bigger than exist quantity:${productExist[0].quantity} for product id:${productObj.productId}` 
      console.log(message)

      return {'success': false, message: message}
    }

    return { success: true, message: 'Order can be done' } 
  }
      
  await inventoryRequestService.create(productObj)

  const message = `Product not in inventory new product added in inventory request for id:${productObj.productId}`
  console.log(message)

  return { success: false, message: message }
}


module.exports = { productOrderInventory }
