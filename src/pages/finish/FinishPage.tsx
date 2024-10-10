import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from '@Src/components/Background';
import {IMAGES} from '@Src/assets/assets';
import ButtonCustom from '@Src/components/ButtonCustom';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from '@Src/MainNavigation';
import {useAppDispatch} from '@Src/redux/useRedux';
import { logout } from '@Src/redux/selector/CodeSlice';

const FinishPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const dispatch = useAppDispatch();
  return (
    <Background>
      <Text className="mb-4 font-title text-3xl text-title_red">DONE</Text>
      <Image
        source={IMAGES.done}
        className="w-56 h-56 mb-2"
        resizeMode="contain"
      />
      <View className="flex flex-row gap-2">
        <Text className="font-payone text-2xl font-extrabold text-text_red">
          Enjoy your noodles
        </Text>
        <Image source={IMAGES.favourite} className="w-8 h-8" />
      </View>
      <View className="absolute bottom-14">
        <ButtonCustom
          content="Back to home"
          event={() => dispatch(logout())}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Infor")}>
          <Text className="text-xl text-center text-yellow-500 font-payone font-bold mt-5 mb-2">
            Get them below
          </Text>
          <Image source={IMAGES.down} className="w-5 h-8 self-center" />
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default FinishPage;
