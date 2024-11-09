import { View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";

export default function Post() {
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
            source={require("../../../../assets/profile1.jpg")}
          />
          <Text className="text-white text-2xl ml-5">Carlos Lima</Text>
        </View>
        <Image
          className="w-85 ml-1 mt-3"
          source={require("../../../../assets/tree-photo.png")}
        />
        <View className="p-2">
          <Text className="font-bold text-lg text-white ">Nome popular</Text>
          <Text className="italic text-white mb-2">Ipê-branco</Text>
          <Text className="font-bold text-lg text-white ">Nome científico</Text>
          <Text className="italic text-white mb-2">Tabebuia roseo-alba</Text>
          <Text className="font-bold text-lg text-white ">Etimologia</Text>
          <Text className="italic text-white mb-2">
            ‘Tabebuia’, do tupi, significa pau que não afunda; roseo alba
            refere-se à sua coloração em rosa-pálido.
          </Text>
          <Text className="font-bold text-lg text-white ">Características</Text>
          <Text className="italic text-white mb-2">
            Raiz profunda, tipo pivotante. A copa colunar, arredondada e
            piramidal. Folha composta, trifolhada, bordas lisas, caducifólia,
            elíptica, ovada a largo-ovada, verde azulada. Na época da floração,
            a árvore perde todas as folhas. Flor campânulas reunidas em
            panículas terminais branco-rosadas
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
