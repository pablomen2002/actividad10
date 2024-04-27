import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const PrincipalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.buttonCamara]}
        onPress={() => navigation.navigate('CameraScreen')}>
        <Text style={styles.buttonText}>CÁMARA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonComunicaciones]}
        onPress={() => navigation.navigate('CommunicationsScreen')}>
        <Text style={styles.buttonText}>COMUNICACIONES</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonGeolocalizacion]}
        onPress={() => navigation.navigate('GeolocationScreen')}>
        <Text style={styles.buttonText}>GEOLOCALIZACIÓN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonAlmacenamiento]}
        onPress={() => navigation.navigate('StorageScreen')}>
        <Text style={styles.buttonText}>ALMACENAMIENTO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrincipalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  button: {
    backgroundColor: '#000', // Un color base para los botones (se sobrescribe abajo)
    padding: 15,
    width: '80%', // Todos los botones tendrán el mismo ancho
    borderRadius: 5,
    marginBottom: 10, // Espacio entre botones
    alignItems: 'center',
  },
  buttonText: {
    color: '#000', // Color de texto negro
    fontSize: 16,
  },
  buttonCamara: {
    backgroundColor: '#ff0000', // Rojo
  },
  buttonComunicaciones: {
    backgroundColor: '#00ff00', // Verde
  },
  buttonGeolocalizacion: {
    backgroundColor: '#0000ff', // Azul
  },
  buttonAlmacenamiento: {
    backgroundColor: '#ffa500', // Naranja
  },
});
