import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.4.1",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export async function sendWifiConfig(
  ssid: string,
  password: string
) {
  try {
    const params = new URLSearchParams();

    params.append("ssid", ssid);
    params.append("password", password);
    params.append("token", "xyz123");

    const response = await api.post(
      "/config",
      params.toString()
    );

    return response.data;
  } catch (error) {
    console.error("Error enviando configuración:", error);
    throw error;
  }
}