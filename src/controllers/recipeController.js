
const amqp = require('amqplib/callback_api');



module.exports = {
    async index(request, response) {
        const ongs = 'pedro';
        console.log(ongs);
        return response.json(ongs);
    },

    async create(request, response) {
        const Data = request.body;

        var json = {            
            Data
        };

        amqp
            .connect('amqp://rabbitmq:rabbitmq@localhost', function (err, conn) {
                if (err != null) bail(err);
                SendMsg(conn, json);
            });


        return response.json(json);
    }
};

function SendMsg(conn, msg) {
    const channel = conn.createChannel();

    channel.sendToQueue('recipe-register-queue', new Buffer.from(JSON.stringify(msg)));
}

