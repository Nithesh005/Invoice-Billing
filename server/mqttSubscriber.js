
const fs = require('fs');
const mongoose = require('mongoose');
const mqtt = require('mqtt');
const path = require('path');
const { name } = path.parse(__filename);

// const allData = JSON.parse(fs.readFileSync('../allData.json'));
mongoose.connect("mongodb://127.0.0.1:27020/newww", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("MongoDB connection successful");
});

const mqttClient = mqtt.connect('mqtt://broker.emqx.io:1883');
mqttClient.on('connect', function () {
    mqttClient.subscribe(`parms`);
    console.log("MQTT client has been subscribed ....");
});

//MQTT MESSAGE

mqttClient.on('message', async function (topic, message) {
    console.log("MQTT message received");

    var data = message.toString();
    var users = JSON.parse(data);

    var myobj = users;
    const collection_name = `summa_data`;
    db.collection(collection_name).insertOne(myobj, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(myobj);
            console.log("1 document inserted");
        }


    });
});
