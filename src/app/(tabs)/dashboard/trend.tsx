import { View, Text, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto } from "@expo/vector-icons";

export default function Trend() {
  return (
    <LinearGradient
      colors={["#03820c", "#e69800"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-4 flex-1">
          <View className="flex-row items-center bg-white h-12 rounded-lg mb-6 px-4 shadow-md">
            <TextInput
              placeholder="Pesquisar"
              placeholderTextColor="#aaa"
              className="flex-1 ml-2 text-black"
            />
            <Fontisto name="search" size={24} color="black" />
          </View>
          <View className="border-b border-t border-white pt-2 pb-2 mb-4">
            <Text className="text-4xl text-white font-bold">Cerrado Trend</Text>
          </View>
          <View className="border-b border-white pb-2 mb-4">
            <Text className="text-white">1.Assuntos do Momento</Text>
            <Text className="text-2xl text-white font-bold">
              #CEDDAGnoCircuitodeCiências
            </Text>
          </View>
          <View className="border-b border-white pb-2 mb-4">
            <Text className="text-white">2.Assuntos do Momento</Text>
            <Text className="text-2xl text-white font-bold">
              #FloresAmarelas
            </Text>
          </View>
          <View className="border-b border-white pb-2 mb-4">
            <Text className="text-white">3.Assuntos do Momento</Text>
            <Text className="text-2xl text-white font-bold">#Ipêdocerrado</Text>
          </View>
          <View className="border-b border-white pb-2 mb-4">
            <Text className="text-white">4.Assuntos do Momento</Text>
            <Text className="text-2xl text-white font-bold">#Queimadas</Text>
          </View>
          <View className="border-b border-white pb-2 mb-4">
            <Text className="text-white">5.Assuntos do Momento</Text>
            <Text className="text-2xl text-white font-bold">
              #PreservaçãoDoCerrado
            </Text>
          </View>
          <View className="border-b border-white pb-2 mb-4">
            <Text className="text-white">6.Assuntos do Momento</Text>
            <Text className="text-2xl text-white font-bold">
              #SementesAladas
            </Text>
          </View>
          <View className="border-b border-white pb-2 mb-4">
            <Text className="text-white">7.Assuntos do Momento</Text>
            <Text className="text-2xl text-white font-bold">
              #Sustentabilidade
            </Text>
          </View>
          <View className="border-b border-white pb-2 mb-4">
            <Text className="text-white">8.Assuntos do Momento</Text>
            <Text className="text-2xl text-white font-bold">#BiomaCerrado</Text>
          </View>
          <View className="border-b border-white pb-2 mb-4">
            <Text className="text-white">9.Assuntos do Momento</Text>
            <Text className="text-2xl text-white font-bold">#Mimetismo</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
