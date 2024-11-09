import { Text, View, Image } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/Button";

export default function SignIn() {
  return (
    <View className="flex-1 p-8 justify-center gap-2">
      <Text className="text-emerald-900 text-4xl font-bold text-center pb-5">
        Mangaba Cerrado
      </Text>
      <Image source={require("../../assets/tree-logo.png")} />
      <Text className="font-bold text-xl pt-8">Entrar</Text>
      <Button
        icon="logo-google"
        title="Entrar com Google"
        onPress={() => router.navigate("(tabs)/dashboard")}
      />
    </View>
  );
}
