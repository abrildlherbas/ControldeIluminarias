import mqtt from "mqtt";

let client: mqtt.MqttClient | null = null;

const HOST = "wss://TU_HOST_HIVEMQ:8884/mqtt";
const USER = "TU_USUARIO";
const PASSWORD = "TU_PASSWORD";

export function connectMQTT() {
  if (client && client.connected) return client;

  client = mqtt.connect(HOST, {
    username: USER,
    password: PASSWORD,
    reconnectPeriod: 3000,
    connectTimeout: 10000,
  });

  client.on("connect", () => {
    console.log("MQTT conectado");
  });

  client.on("error", (err) => {
    console.log(err);
  });

  return client;
}

export function subscribeStatus(
  callback: (message: string) => void
) {
  if (!client) return;

  client.subscribe("lamps/device1/status");

  client.on("message", (_, payload) => {
    callback(payload.toString());
  });
}

export function publishCommand(cmd: string) {
  if (!client) return;

  client.publish(
    "lamps/device1/cmd",
    JSON.stringify({
      cmd,
      token: "xyz123",
    })
  );
}