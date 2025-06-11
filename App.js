import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "./global.css"
import Home from './components/Home';


export default function App() {

  return (
    <View>
      <Home/>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

