import React from 'react';

import { Text, View, StatusBar, Switch } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductsList from './components/ProductsList'


const App = () => {

  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className="flex-row w-full gap-5">
        <Text className=" text-2xl font-bold dark:text-white">New collection</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
      <ProductsList />
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>

  );
}
export default App;
