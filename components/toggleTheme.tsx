import React from "react";
import { Pressable, SafeAreaView, Text, StatusBar } from "react-native";
import { useColorScheme } from "nativewind";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const ToggleTheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const handleToggle = () => {
    // Trigger animation
    scale.value = withTiming(0, { duration: 150 }, () => {
      scale.value = withTiming(1, { duration: 150 });
    });
    opacity.value = withTiming(0, { duration: 150 }, () => {
      opacity.value = withTiming(1, { duration: 150 });
    });

    toggleColorScheme();
  };

  return (
    <SafeAreaView className="absolute top-0 right-6 p-2 rounded-full z-50">
      <StatusBar
        backgroundColor={isDarkMode ? "#374151" : "#F1F5F9"}
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
      <Pressable onPress={handleToggle}>
        <Animated.Text
          className="text-2xl"
          style={animatedStyle}
        >
          {isDarkMode ? "🌙" : "🔆"}
        </Animated.Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ToggleTheme;
