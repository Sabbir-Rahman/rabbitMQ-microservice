# rabbitMQ-microservice
This is done as a lab task for swe4603 and also for practice and future use

### Scenario

Order microservice pruduces some messages and inventory service receives those messages. They should not be strongly coupled to each other. An intermediary message broker can be used. RabbitMQ comes into this part.

Order Service model
- orderId
- productName
- quantity
- price

Order Status model (will be used for messaging)
- Order
- status
- message

Inventory Service model
- productId
- productQuantity
- productPrice

### Task
- Create a different message from the order service, say a product id will be added with the orderStatus.
- Create a Product entity in the inventory service with (id, name, quantity);
- Check whether order can be fullfilled by checking the product quantity in the inventory service or not and give a response message.
