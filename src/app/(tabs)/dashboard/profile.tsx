import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Profile() {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <View className="items-center mt-4">
        <Image
          source={require("../../../../assets/profile1.jpg")}
          className="w-32 h-32 rounded-full border-2 border-emerald-500"
          resizeMode="cover"
        />
        <Text className="text-2xl font-bold mt-4 text-emerald-900">
          Carlos Lima
        </Text>
        <Text className="text-gray-600 mt-1">
          Apaixonado pela Natureza | Fotografo
        </Text>
      </View>
      <View className="flex-row justify-around mt-6">
        <View className="items-center">
          <Text className="text-xl font-bold text-emerald-900">150</Text>
          <Text className="text-gray-500">Posts</Text>
        </View>
        <View className="items-center">
          <Text className="text-xl font-bold text-emerald-900">2k</Text>
          <Text className="text-gray-500">Seguidores</Text>
        </View>
        <View className="items-center">
          <Text className="text-xl font-bold text-emerald-900">180</Text>
          <Text className="text-gray-500">Seguindo</Text>
        </View>
      </View>
      <View className="mt-6 items-center">
        <TouchableOpacity className="bg-emerald-500 py-2 px-4 rounded-full">
          <Text className="text-white font-bold">Editar Perfil</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-8 px-4">
        <Text className="text-lg font-bold text-emerald-900">Sobre</Text>
        <Text className="text-gray-600 mt-2">
          Passionate about nature and conservation. Love capturing moments in
          the wild and sharing them with others.
        </Text>
      </View>
      <View className="mt-8 px-4">
        <Text className="text-lg font-bold text-emerald-900 mb-4">Fotos</Text>
        <View className="flex-row flex-wrap justify-between">
          <Image
            source={require("../../../../assets/tree-photo.png")}
            className="w-1/3 h-24 mb-4"
            resizeMode="cover"
          />
          <Image
            source={require("../../../../assets/ipe.png")}
            className="w-1/3 h-24 mb-4"
            resizeMode="cover"
          />
          <Image
            source={require("../../../../assets/ipe-rosa.png")}
            className="w-1/3 h-24 mb-4"
            resizeMode="cover"
          />
        </View>
      </View>
    </ScrollView>
  );
}
