### Step
- First setup the node project
- Then setup the model
- Run the rabbitMQ docker container of rabbitQ 3 management
``` docker run -d --hostname my-rabbit -p 15672:15672 -p 5672:5672 rabbitmq:3-management ```
- create order service controller
- create inventory service controller
- in inventory service listen the message with channel.consume
- add product to an array of object
- after adding again calling the function and acknowledge the message
- again calling the function will again execute the for loop
```
for (let i = 0; i < ProductObj.length; i++) {
      await addProductInventory(ProductObj[i])
      ProductObj.splice(i,1)
    }
```
which is used for not existing product add. After product add remove the object from the array that's remove redundency check for prev product

- create a new queue for inventory which will return the product count
- listen product count from order and give response order is possible or not