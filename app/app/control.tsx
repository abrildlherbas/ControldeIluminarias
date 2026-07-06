import { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

import {
  connectMQTT,
  publishCommand,
} from "../services/mqtt";

export default function Control() {

  useEffect(() => {
    connectMQTT();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Smart Lamp
      </Text>

      <Button
        title="Encender"
        onPress={() => {
          publishCommand("ON");
        }}
      />

      <View style={{ height: 20 }} />

      <Button
        title="Apagar"
        onPress={() => {
          publishCommand("OFF");
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container:{

    flex:1,
    justifyContent:"center",
    padding:20

  },

  title:{

    fontSize:28,
    marginBottom:30,
    textAlign:"center"

  }

});