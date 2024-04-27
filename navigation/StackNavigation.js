import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PrincipalScreen from '../screens/PrincipalScreen';
import CameraScreen from '../screens/CameraScreen';
import CommunicationsScreen from '../screens/CommunicationsScreen';
import GeolocationScreen from '../screens/GeolocationScreen';
import StorageScreen from '../screens/StorageScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Aplicaciones Moviles" component={PrincipalScreen} />
                <Stack.Screen name="CameraScreen" component={CameraScreen} options={{headerShown:false}}/>
                <Stack.Screen name="CommunicationsScreen" component={CommunicationsScreen}options={{headerShown:false}} />
                <Stack.Screen name="GeolocationScreen" component={GeolocationScreen}options={{headerShown:false}} />
                <Stack.Screen name="StorageScreen" component={StorageScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})