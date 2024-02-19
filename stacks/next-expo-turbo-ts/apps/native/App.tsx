import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";

import { Button } from "@repo/ui/src";

import "./global.css";

export default function App() {
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center">
        <Text>Open up App.tsx to start wrorking on your app!</Text>
        <Button text="Title" onClick={() => console.log("clicked")} />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
