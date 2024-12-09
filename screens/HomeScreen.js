import React, { useRef } from "react";
import { StyleSheet, Alert } from "react-native";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";
import { handleIcsUrl } from "../services/icsHandler";
import { addToCalendar } from "../services/calendarHelper";

export default function HomeScreen() {
  const webviewRef = useRef(null);

  const handleFileDownload = async (downloadUrl) => {
    try {
      // 下载并解析 .ics 文件
      const event = await handleIcsUrl(downloadUrl);
      if (event) {
        console.log("Event to add:", event);
        const result = await addEventToCalendar(eventConfig);
        console.log("Add event result:", result);
        Alert.alert("Success", "Event has been added to your calendar.");
      } else {
        Alert.alert("Error", "Failed to parse the ICS file.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while adding event to calendar.");
    }
  };

  return (
    <WebView
      ref={webviewRef}
      style={styles.container}
      source={{ uri: "https://communitygarden.theinternetplatform.com/" }}
      // 当文件下载请求触发时调用此回调
      onFileDownload={({ nativeEvent: { downloadUrl } }) =>
        handleFileDownload(downloadUrl)
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
