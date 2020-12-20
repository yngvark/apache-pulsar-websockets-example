var WebSocket = require('ws'),
    topic = "ws://localhost:38080/ws/v2/consumer/persistent/public/default/mytopic/my-sub",
    ws = new WebSocket(topic);

ws.on('message', function(message) {
    var receiveMsg = JSON.parse(message);
    console.log('Received: %s - payload: %s', message, new Buffer(receiveMsg.payload, 'base64').toString());
    var ackMsg = {"messageId" : receiveMsg.messageId};
    ws.send(JSON.stringify(ackMsg));
});
