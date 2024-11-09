import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { Link } from "expo-router";
import { FontAwesome5, Entypo, Octicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <LinearGradient
      colors={["#03820c", "#e69800"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-start mt-6 ml-4">
          <Image
            className="w-12 h-12 rounded-full"
            source={require("../../../../assets/profile1.jpg")}
          />
          <Text className="text-white text-2xl ml-5">Carlos Lima</Text>
        </View>
        <Link href={"./create/post"}>
          <View>
            <Image
              className="w-85 ml-1 mt-4"
              source={require("../../../../assets/tree-photo.png")}
            />
          </View>
        </Link>
        <View className="p-4">
          <View className="flex-row items-center justify-between mb-4">
            <FontAwesome5 name="map-marked-alt" size={24} color="#fff" />
            <Entypo name="location" size={24} color="#fff" />
            <Entypo name="tree" size={24} color="#fff" />
          </View>
          <View className="p-2">
            <Text className="font-bold text-lg text-white mb-1">
              Ipê-branco no centro de um parque urbano
            </Text>
            <Text className="italic text-white mb-5">Tabebuia roseo-alba</Text>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-lg text-zinc-200 mb-1">
                Ver todos os comentários
              </Text>
            </View>
            <View className="flex-row items-center gap-2 mr-10">
              <Image
                className="w-10 h-10 rounded-full"
                source={require("../../../../assets/profile1.jpg")}
              />
              <View className="flex-row items-center bg-white px-3 py-1">
                <TextInput
                  placeholder="Comentários"
                  placeholderTextColor="#aaa"
                  className="flex-1"
                ></TextInput>
                <Octicons name="paper-airplane" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row items-center justify-start mt-6 ml-4">
          <Image
            className="w-12 h-12 rounded-full"
            source={require("../../../../assets/profile2.jpg")}
          />
          <Text className="text-white text-2xl ml-5">Maria Bandeira</Text>
        </View>
        <Link href={"./create/info"}>
          <View>
            <Image
              className="w-85 ml-1 mt-4"
              source={require("../../../../assets/ipe.png")}
            />
          </View>
        </Link>
        <View className="p-4">
          <View className="flex-row items-center justify-between mb-4">
            <FontAwesome5 name="map-marked-alt" size={24} color="#fff" />
            <Entypo name="location" size={24} color="#fff" />
            <Entypo name="tree" size={24} color="#fff" />
          </View>
          <View className="p-2">
            <Text className="font-bold text-lg text-white mb-1">
              Ipê-do-cerrado no centro de um parque urbano
            </Text>
            <Text className="italic text-white mb-5">
              Handroanthus ochraceus
            </Text>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-lg text-zinc-200 mb-1">
                Ver todos os comentários
              </Text>
            </View>
            <View className="flex-row items-center gap-2 mr-10">
              <Image
                className="w-10 h-10 rounded-full"
                source={require("../../../../assets/profile2.jpg")}
              />
              <View className="flex-row items-center bg-white px-3 py-1">
                <TextInput
                  placeholder="Comentários"
                  placeholderTextColor="#aaa"
                  className="flex-1"
                ></TextInput>
                <Octicons name="paper-airplane" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row items-center justify-start mt-6 ml-4">
          <Image
            className="w-12 h-12 rounded-full"
            source={require("../../../../assets/profile3.jpg")}
          />
          <Text className="text-white text-2xl ml-5">William Barbosa</Text>
        </View>
        <Link href={"./create/page"}>
          <View>
            <Image
              className="w-85 ml-1 mt-4"
              source={require("../../../../assets/ipe-rosa.png")}
            />
          </View>
        </Link>
        <View className="p-4">
          <View className="flex-row items-center justify-between mb-4">
            <FontAwesome5 name="map-marked-alt" size={24} color="#fff" />
            <Entypo name="location" size={24} color="#fff" />
            <Entypo name="tree" size={24} color="#fff" />
          </View>
          <View className="p-2">
            <Text className="font-bold text-lg text-white mb-1">
              Ipê-rosa no centro de um parque urbano
            </Text>
            <Text className="italic text-white mb-5">
              Handroanthus heptaphyllus
            </Text>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-lg text-zinc-200 mb-1">
                Ver todos os comentários
              </Text>
            </View>
            <View className="flex-row items-center gap-2 mr-10">
              <Image
                className="w-10 h-10 rounded-full"
                source={require("../../../../assets/profile3.jpg")}
              />
              <View className="flex-row items-center bg-white px-3 py-1">
                <TextInput
                  placeholder="Comentários"
                  placeholderTextColor="#aaa"
                  className="flex-1"
                ></TextInput>
                <Octicons name="paper-airplane" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
