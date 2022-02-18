import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import PlannerScreen from './screens/PlannerScreen';
import Navigation from './navigation/index';

export default function App() {
  return (
    <>
    <Navigation /> 
      <StatusBar style='auto'></StatusBar> 
    </>
  );
}


