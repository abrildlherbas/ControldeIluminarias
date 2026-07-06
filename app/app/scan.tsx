import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Scan() {
  const [permission, requestPermission] = useCameraPermissions();

  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>Necesitamos permiso para usar la cámara</Text>

        <Button title="Dar permiso" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <CameraView
      style={{ flex: 1 }}
      facing={"back"}
      onBarcodeScanned={
        scanned
          ? undefined
          : ({ data }) => {
              setScanned(true);

              console.log(data);

              router.push("/config");
            }
      }
    />
  );
}
