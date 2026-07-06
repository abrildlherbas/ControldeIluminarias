import axios from "axios";

const ESP32_IP = "http://192.168.4.1";

export async function sendWifiConfig(
  ssid: string,
  password: string
) {
  try {

    const response = await axios.post(
      `${ESP32_IP}/config`,
      {
        ssid,
        password,
      }
    );

    return response.data;

  } catch (error) {

    console.log(error);

    throw error;
  }
}