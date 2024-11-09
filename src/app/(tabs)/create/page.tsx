import { View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";

export default function Page() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ title: "CEDDAG" });
  }, [navigation]);

  return (
    <LinearGradient
      colors={["#03820c", "#e69800"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-start mt-4 ml-4">
          <Image
            className="w-12 h-12 rounded-full"
            source={require("../../../../assets/profile3.jpg")}
          />
          <Text className="text-white text-2xl ml-5">William Barbosa</Text>
        </View>
        <Image
          className="w-85 ml-1 mt-3"
          source={require("../../../../assets/ipe-rosa.png")}
        />
        <View className="p-2">
          <Text className="font-bold text-lg text-white ">Nome popular</Text>
          <Text className="italic text-white mb-2">Ipê-rosa</Text>
          <Text className="font-bold text-lg text-white ">Nome científico</Text>
          <Text className="italic text-white mb-2">
            Handroanthus heptaphyllus
          </Text>
          <Text className="font-bold text-lg text-white ">Etimologia</Text>
          <Text className="italic text-white mb-2">
            Tabebuia: do tupi, pau que flutua, ou pau- -de-formiga. Heptaphylla:
            folhas com até sete folíolos. Ipê: do tupi, que significa casca, ou
            árvore da casca
          </Text>
          <Text className="font-bold text-lg text-white ">Características</Text>
          <Text className="italic text-white mb-2">
            É uma árvore de 8 a 30m de altura com tronco que pode chegar a quase
            um metro de diâmetro. O tronco é cilíndrico e reto, com a casca
            grossa, escura e bastante fissurada
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
