const amqp = require('amqplib');

// conectando com o rabbit (login: rabbitmq password: rabbitmq)
amqp
.connect('amqp://rabbitmq:rabbitmq@localhost', function(err, conn) {
  if (err != null) bail(err);
  cons
});