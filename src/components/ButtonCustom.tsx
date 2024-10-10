import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '@Src/assets/assets';

const ButtonCustom = ({
  content,
  event,
}: {
  content: string;
  event: () => void;
}) => {
  return (
    <TouchableOpacity className="rounded-full relative" onPress={event}>
      <View className="px-9 py-2 z-50  ">
        <Text className="font-payone text-xl z-50 text-color_red_infor">
          {content}
        </Text>
      </View>
      <Image
        source={IMAGES.background_two}
        className="w-full h-full absolute z-40 rounded-full"
      />
      <View className="w-full h-full absolute top-1 left-1 bg-white rounded-full" />
    </TouchableOpacity>
  );
};

export default ButtonCustom;
