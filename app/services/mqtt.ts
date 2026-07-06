import mqtt from "mqtt";

const HOST =
  "wss://TU_BROKER.s1.eu.hivemq.cloud:8884/mqtt";

let client: mqtt.MqttClient | null = null;

export function connectMQTT() {

  client = mqtt.connect(HOST, {
    username: "usuario",
    password: "password",
  });

  return client;
}

export function publishCommand(
  cmd: string
) {

  if (!client) return;

  client.publish(
    "lamps/device1/cmd",
    JSON.stringify({
      cmd,
      token: "xyz123",
    })
  );
}

export function subscribeStatus(
  callback: (msg: string) => void
) {

  if (!client) return;

  client.subscribe(
    "lamps/device1/status"
  );

  client.on(
    "message",
    (_topic, payload) => {

      callback(
        payload.toString()
      );

    }
  );
}