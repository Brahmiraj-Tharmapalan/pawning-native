import React from "react";
import { Pressable, SafeAreaView, View, Text } from "react-native";
import { useColorScheme } from "nativewind";

const ToggleTheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Pressable onPress={toggleColorScheme}>
        <Text className="text-black dark:text-white">
          {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ToggleTheme;
