import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Lamp</Text>

      <Button
        title="Comenzar configuración"
        onPress={() => router.push("/scan")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: "bold",
  },
});
