import paho.mqtt.client as mqtt
import time
import json
import random
from datetime import datetime

# MQTT broker settings
broker_address = "broker.emqx.io"
port = 1883
topic = "parms"  # Replace with your desired MQTT topic

# Create an MQTT client
client = mqtt.Client()

# Connect to the broker
client.connect(broker_address, port)

# Continuous data publishing
while True:
    # Generate random values for "temp," "pressure," and "flow"
    random_temp = random.uniform(20, 40)  # Random temperature between 20 and 40
    random_pressure = random.uniform(800, 1200)  # Random pressure between 800 and 1200
    random_flow = random.uniform(0, 10)  # Random flow between 0 and 10

    # Get the current timestamp in ISO 8601 format
    # current_timestamp = datetime.utcnow().isoformat() + "Z"
    current_timestamp = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())

    # Create a dictionary with the current timestamp and random values
    data_to_publish = {
        "mac": "7821847dfc",
        "dt": current_timestamp,
        "Subtopic": "DeviceCommand",
        "temp": [
            {
                "ipid": "1",
                "value": random_temp,
                "error_code": 0
            }
        ],
        "pressure": [
            {
                "ipid": "2",
                "value": random_pressure
            }
        ],
        "flow": [
            {
                "ipid": "3",
                "value": random_flow
            }
        ]
    }

    # Convert the data to JSON
    json_data = json.dumps(data_to_publish)

    # Publish the JSON data to the MQTT topic
    client.publish(topic, json_data)

    # Print the data for debugging
    print(f"Published: {json_data}")

    # Sleep for some time before publishing again
    time.sleep(2)  # Sleep for 5 seconds (adjust as needed)
