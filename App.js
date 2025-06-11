import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import './global.css';
import Home from './components/Home';
import SafeScreen from './components/SafeScreenProps';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeScreen>
      <View style={{ flex: 1 }}>
        <Home />

        <View className='bg-black h-20 absolute bottom-0'>
                  <NavBar/>
        </View>
        <StatusBar style="light" />
      </View>
      </SafeScreen>
      </SafeAreaProvider>
  );
}
