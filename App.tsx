import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import Main from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <StatusBar style="dark" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
