import {View, Text, Image} from 'react-native';
import React from 'react';
import BackgroundInfor from '@Src/components/BackgroundInfor';
import {IMAGES} from '@Src/assets/assets';
import {DataState} from '@Src/redux/selector/CodeSlice';
import {transDate} from '@Src/data/helper';

const Information = ({data}: {data: DataState}) => {
  return (
    <BackgroundInfor>
      <View className="px-3 py-2 flex-row justify-between">
        <Image
          source={data?.avatar ? {uri: data?.avatar} : IMAGES.avatar_loading}
          className="w-24 h-24 rounded-full"
          resizeMode="stretch"
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
            {data.fullName}
          </Text>
          <Text
            className="max-w-[100px] font-text text-color_red_infor"
            numberOfLines={1}>
            {data.birthDay && transDate(data.birthDay)}
          </Text>
          <Text
            className="max-w-[100px] font-text text-color_red_infor"
            numberOfLines={1}>
            {data.gender}
          </Text>
          <Text
            className="max-w-[100px] font-text text-color_red_infor"
            numberOfLines={1}>
            {data.department}
          </Text>
        </View>
      </View>
    </BackgroundInfor>
  );
};

export default Information;
