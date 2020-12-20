// https://pulsar.apache.org/docs/en/client-libraries-websocket/#nodejs

var WebSocket = require('ws'),
    topic = "ws://localhost:38080/ws/v2/producer/persistent/public/default/my-topic",
    ws = new WebSocket(topic);

var message = {
  "payload" : new Buffer("Hello World").toString('base64'),
  "properties": {
    "key1" : "value1",
    "key2" : "value2"
  },
  "context" : "1"
};

function send(ws, msg) {
  console.log("Sending msg")
  ws.send(JSON.stringify(message));
}

ws.on('open', function() {
  setInterval(function() { 
    send(ws, message)
  }, 3000);

});

ws.on('message', function(message) {
  console.log('received ack: %s', message);
});
