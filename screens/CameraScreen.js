import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();

      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMicrophonePermission(microphonePermission.status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null || hasMicrophonePermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasMicrophonePermission === false) {
    return <Text>No access to camera or microphone</Text>;
  }

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.preview} />
      ) : (
        <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={(ref) => setCameraRef(ref)}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                if (cameraRef) {
                  const photo = await cameraRef.takePictureAsync();
                  setImage(photo.uri);
                }
              }}
            >
              <Text style={styles.buttonText}>Tomar Foto</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setImage(null);
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Regresar a Principal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1,
  },
});
