import ToggleTheme from "@/components/toggleTheme";
import { Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import { SignIn } from "@/components/sign-in/sign-in";

export default function Index() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View
      className={`flex-1 justify-center items-center ${
        isDarkMode ? "bg-slate-600" : "bg-slate-100"
      }`}
    >
      <ToggleTheme />
      <SignIn />
    </View>
  );
}
