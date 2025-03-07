import React from "react";
import { Pressable, SafeAreaView, Text, StatusBar } from "react-native";
import { useColorScheme } from "nativewind";

const ToggleTheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <SafeAreaView className="bg-slate-100 dark:bg-slate-600 absolute top-0 right-6 p-2 rounded-full z-50">
      <StatusBar
        backgroundColor={isDarkMode ? "#475569" : "#f1f5f9"}
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
      <Pressable onPress={toggleColorScheme}>
        <Text className="text-black dark:text-white text-lg">
          {`${isDarkMode ? "🌙" : "🔆"}`}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ToggleTheme;
