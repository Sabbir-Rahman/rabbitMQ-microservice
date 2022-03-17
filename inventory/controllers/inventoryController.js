const inventoryService =  require('../model/inventoryService')

// product check and create if not exist
const addProductInventory = async (productObj) => {
  const productExist = await inventoryService.find({ "productId": productObj.productId}).limit(1)
  
  if(productExist.length > 0) {
    console.log(`Product not added in inventory already exist for id:${productObj.productId}`)
    return false 
  }
      
  await inventoryService.create(productObj)
  console.log(`New product added in inventory for id:${productObj.productId}`)
  return true
}

module.exports = { addProductInventory }
