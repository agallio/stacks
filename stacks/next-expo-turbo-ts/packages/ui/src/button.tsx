import { GestureResponderEvent, Text, Pressable, View } from "react-native";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <Pressable key="button" onPress={onClick}>
      <View className="bg-blue-200 w-20 p-4 rounded">
        <Text className="font-bold text-center select-none">{text}</Text>
      </View>
    </Pressable>
  );
}
