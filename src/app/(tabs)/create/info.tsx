import { View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";

export default function Info() {
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
            source={require("../../../../assets/profile2.jpg")}
          />
          <Text className="text-white text-2xl ml-5">Maria Bandeira</Text>
        </View>
        <Image
          className="w-85 ml-1 mt-3"
          source={require("../../../../assets/ipe.png")}
        />
        <View className="p-2">
          <Text className="font-bold text-lg text-white ">Nome popular</Text>
          <Text className="italic text-white mb-2">Ipê-amarelo</Text>
          <Text className="font-bold text-lg text-white ">Nome científico</Text>
          <Text className="italic text-white mb-2">Handroanthus ochraceus</Text>
          <Text className="font-bold text-lg text-white ">Etimologia</Text>
          <Text className="italic text-white mb-2">
            Handroanthus: handro = dedicado ao bo- tânico brasileiro O. Handro +
            anthus = flor. Ochraceus: (L.) ochra = ocre, flores amarelas.
          </Text>
          <Text className="font-bold text-lg text-white ">Características</Text>
          <Text className="italic text-white mb-2">
            Árvore de 6 a 14 m de altura, com tronco tortuso. Folhas opostas,
            compostas, com 5 folíolos densamente pilosos, principalmente na face
            inferior que também é mais clara, de 4 a 9 cm de comprimento por 3 a
            5 cm de largura, pecíolo de 3 a 5,5 cm de comprimento.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
