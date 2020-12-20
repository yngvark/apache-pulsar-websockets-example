A minimal example of running Apache Pulsar with websockets server and client side (in a browser)

# How to run

## 1. Run Pulsar server

Clone this repo and run

```bash
docker-compose up -d
```

## 2. Run a Pulsar producer

```bash
npm install
node producer.js
```

## 3. Run a consumer in a Browser

Open your favourite browser's console, and paste in the following Javascript:


```js

// http://pulsar.apache.org/docs/en/client-libraries-websocket.html#nodejs-consumer

var websocket = new WebSocket("ws://localhost:38080/ws/v2/consumer/persistent/public/default/my-topic/my-sub")
websocket.onopen = (event) => {
    console.log("Connected!")
}

websocket.onmessage = (event) => {
    j = JSON.parse(event.data)
    console.log("Received message", j)
    console.log("MESSAGE: ", atob(j.payload))
}

// websocket.close()


```

This code can only be run once at a time. Run

```js
websocket.close()
```

if you want to start a new consumer.
