import { IMAGES } from '@Assets/assets';
import React from 'react';
import {Image, Text, View} from 'react-native';
function App(): React.JSX.Element {
  return (
    <View className="bg-black w-full h-full">
      <Text className="text-white">aaaa</Text>
      <Image source={IMAGES.icon}/>
    </View>
  );
}

export default App;
