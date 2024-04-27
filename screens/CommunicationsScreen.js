import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import * as SMS from 'expo-sms';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from 'expo';

const CommunicationsScreen = ({ navigation }) => {
  const phoneNumber = '3511199520';

  const sendSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      // Aquí puedes redactar tu mensaje y pasarlo al body del SMS
      const { result } = await SMS.sendSMSAsync(
        [phoneNumber],
        'Tu mensaje aquí'
      );
    } else {
      // Manejar casos en los que el SMS no está disponible
    }
  };

  const sendEmail = () => {
    MailComposer.composeAsync({
      recipients: ['correo@example.com'], // El correo del destinatario
      subject: 'Asunto del correo',
      body: 'Cuerpo del correo'
    });
  };

  const makePhoneCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comunicacion</Text>
      <TouchableOpacity style={styles.button} onPress={sendSMS}>
        <Text style={styles.buttonText}>Enviar SMS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={sendEmail}>
        <Text style={styles.buttonText}>Enviar Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={makePhoneCall}>
        <Text style={styles.buttonText}>Hacer Llamada</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Regresar a Principal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommunicationsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around', // Cambiado para distribuir los elementos uniformemente
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20, // Agrega padding para no tocar los bordes de la pantalla
    },
    text: {
      fontSize: 22,
      color: '#333',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#2196F3', // Color azul para el botón
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: 250, // Ancho fijo para todos los botones
      marginVertical: 10, // Agrega espacio vertical entre los botones
      alignItems: 'center', // Asegura que el texto esté centrado
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  