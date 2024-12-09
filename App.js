import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NotificationProvider } from './components/NotificationProvider';

export default function App() {
  return (
    <NotificationProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </NotificationProvider>
  );
}
