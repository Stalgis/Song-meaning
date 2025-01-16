import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyComponent from "./app/myComponent.js"; // Import the component
import MyComponent2 from "./app/myComponent2.js"; // Import the component
import "./global.css";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app !
      </Text>
      <MyComponent />
      <MyComponent2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "white" },
});
