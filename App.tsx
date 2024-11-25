import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './src/routes/Router';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Router />
    </SafeAreaProvider>
  );
}
