import ToggleTheme from "@/components/toggleTheme";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-slate-100 dark:bg-slate-600 flex-1 justify-center items-center">
      <ToggleTheme />
      <Text className="text-red-800 text-2xl dark:text-purple-800">
        Loginnnnn
      </Text>
    </View>
  );
}
