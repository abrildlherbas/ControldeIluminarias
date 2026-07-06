import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { sendWifiConfig } from "../services/api";

export default function Config() {
  const [ssid, setSSID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleConfig() {
    if (!ssid || !password) {
      Alert.alert("Error", "Completá el SSID y la contraseña.");
      return;
    }

    try {
      setLoading(true);

      await sendWifiConfig(ssid, password);

      Alert.alert(
        "Configuración enviada",
        "Esperando respuesta del dispositivo..."
      );

      router.push("/control");
    } catch (error) {
      console.error(error);

      Alert.alert(
        "Error",
        "No se pudo enviar la configuración al ESP32."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurar WiFi</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la red (SSID)"
        value={ssid}
        onChangeText={setSSID}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title={loading ? "Enviando..." : "Enviar configuración"}
        onPress={handleConfig}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});