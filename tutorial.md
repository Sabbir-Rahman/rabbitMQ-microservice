### Step
- First setup the node project
- Then setup the model
- Run the rabbitMQ docker container of rabbitQ 3 management
``` docker run -d --hostname my-rabbit -p 15672:15672 -p 5672:5672 rabbitmq:3-management ```
- create order service controller