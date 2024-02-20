import { TouchableOpacity, GestureResponderEvent } from "react-native";

// Components
import { Text } from "../text";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <TouchableOpacity
      className="flex items-center justify-center bg-blue-600 rounded p-4 w-[fit-content]"
      onPress={onClick}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
}
