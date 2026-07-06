import {
  View,
  Button,
  Text,
  StyleSheet,
} from "react-native";

import {
  publishCommand
} from "../services/mqtt";

export default function Control() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Control de lámpara
      </Text>

      <Button
        title="ENCENDER"
        onPress={() => {

          publishCommand("ON");

        }}
      />

      <View
        style={{ height: 20 }}
      />

      <Button
        title="APAGAR"
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
    fontSize:24,
    marginBottom:20,
    textAlign:"center"
  }

});