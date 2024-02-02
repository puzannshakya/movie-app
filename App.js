import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ThemeProvider,
  createTheme,
  darkColors,
  lightColors,
} from "@rneui/themed";
import AppStack from "./src/stack/AppStack.js";
const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      iso: lightColors.platform.ios,
    }),
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios,
    }),
  },
  model: "light",
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AppStack />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
