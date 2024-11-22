import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


import { WebView } from 'react-native-webview';
export default function HomeScreen() {
  return (
    <>
      <WebView style={styles.container} source={{ uri: 'https://communitygarden.theinternetplatform.com/' }}></WebView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
