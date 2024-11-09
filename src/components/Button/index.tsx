import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

export function Button({
  title,
  isLoading = false,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.8}
      {...rest}
      className="w-full flex-row items-center justify-center gap-3 bg-zinc-900 p-5 rounded-2xl"
    >
      {isLoading ? (
        <ActivityIndicator color="#fafafa" />
      ) : (
        <>
          <Ionicons name={icon} size={20} color={"#fafafa"} />
          <Text className="text-zinc-50 text-lg">{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
