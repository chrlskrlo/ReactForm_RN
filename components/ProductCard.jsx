import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { useColorScheme } from "nativewind";

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function ProductCard({
    image,
    category,
    title,
    price,
    description
}) {

    const [count, setCount] = useState(1);
    const { colorScheme } = useColorScheme();
    return (
        <View className="w-99 bg-white dark:bg-gray-50/10 rounded-3xl p-5 m-5">
            <View className="bg-white rounded-xl">
                <Image
                    source={{ uri: image }}
                    className="w-full h-72"
                    style={{ resizeMode: 'contain' }} />
            </View>
            <View className="mt-5">
                <Text className="text-sm text-black/60 dark:text-white/70">{category}</Text>
                <Text className="text-lg font-semibold dark:text-white">{title}</Text> 
                <View className="flex-row justify-between my-3">
                <View className="flex-row items-center gap-3">
                
                    <AntDesign
                    name="minuscircleo"
                    size={24}
                    color={colorScheme === 'light' ? 'black' : 'white'}
                    onPress={() => setCount(count - 1)} />
                    


                    <Text className="text-xl dark:text-white">{count}</Text>

                 
                    <AntDesign
                    name="pluscircleo"
                    size={24}
                    color={colorScheme === 'light' ? 'black' : 'white'}
                    onPress={() => setCount(count + 1)} />
                  

                </View>
                <Text className="text-2xl font-extrabold dark:text-white">${price * count}</Text>
                </View>
                <Text
                numberOfLines={3} 
                className="text-sm text-black/60 dark:text-white/70">{description}</Text>
                <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full">
                  <Text className="text-white dark:text-black ">Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}