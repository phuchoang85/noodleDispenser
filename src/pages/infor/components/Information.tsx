import {View, Text, Image} from 'react-native';
import React from 'react';
import BackgroundInfor from '@Src/components/BackgroundInfor';
import {IMAGES} from '@Src/assets/assets';

const Information = () => {
  return (
    <BackgroundInfor>
      <View className="px-3 py-2 flex-row justify-between">
        <Image
          source={IMAGES.avatar_loading}
          className="w-24 h-24 rounded-full"
          resizeMode="contain"
        />

        <View className="justify-between">
          <Text className="font-text font-bold text-color_red_infor">
            Full Name:
          </Text>
          <Text className="font-text font-bold text-color_red_infor">
            BirthDay:
          </Text>
          <Text className="font-text font-bold text-color_red_infor">
            Gender:
          </Text>
          <Text className="font-text font-bold text-color_red_infor">
            Department:
          </Text>
        </View>
        <View className="justify-between">
          <Text
            className="max-w-[100px] font-text text-color_red_infor"
            numberOfLines={1}>
            nameeeeeeeee
          </Text>
          <Text
            className="max-w-[100px] font-text text-color_red_infor"
            numberOfLines={1}>
            12/09/2000
          </Text>
          <Text
            className="max-w-[100px] font-text text-color_red_infor"
            numberOfLines={1}>
            male
          </Text>
          <Text
            className="max-w-[100px] font-text text-color_red_infor"
            numberOfLines={1}>
            design
          </Text>
        </View>
      </View>
    </BackgroundInfor>
  );
};

export default Information;
