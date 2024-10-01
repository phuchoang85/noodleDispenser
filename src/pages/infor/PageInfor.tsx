import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Background from '@Src/components/Background';
import {dataCup} from '@Src/contants/data';
import SelectCup from './components/SelectCup';
import Information from './components/Information';
import {IMAGES} from '@Src/assets/assets';

const PageInfor = () => {
  const [dataStatusCup, setDataStatusCup] = useState(dataCup);
  const submit = () => {
    const result = dataStatusCup.map(ele =>
      ele.status && ele.noodleLeft !== 0
        ? {...ele, noodleLeft: ele.noodleLeft - 1}
        : ele,
    );

    setDataStatusCup(result);
  };
  return (
    <Background>
      <Text className="mb-4 font-title text-3xl text-title_red">
        INFORMATION
      </Text>
      <Information />

      <SelectCup dataCup={dataStatusCup} setDataStatusCup={setDataStatusCup} />

      <View className="absolute bottom-36">
        <TouchableOpacity className="rounded-full relative" onPress={submit}>
          <View className="px-9 py-2 z-50  ">
            <Text className="font-payone text-xl z-50 text-color_red_infor">
              Get your noodles
            </Text>
          </View>
          <Image
            source={IMAGES.background_two}
            className="w-full h-full absolute z-40"
            resizeMode="contain"
          />
          <View className="w-full h-full absolute bg-white top-1 left-1 rounded-full" />
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default PageInfor;
