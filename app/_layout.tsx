import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "../global.css";
import ToggleTheme from "@/components/toggleTheme";
import { useColorScheme } from "nativewind";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: "#374151",
    },
  };

  const CustomLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#F1F5F9",
    },
  };

  return (
    <GluestackUIProvider>
      <ThemeProvider value={isDarkMode ? CustomDarkTheme : CustomLightTheme}>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
      <ToggleTheme />
    </GluestackUIProvider>
  );
}
