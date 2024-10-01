import {ImageBackground, ScrollView, Dimensions, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '@Assets/assets';

const Background = ({children}: {children: React.ReactNode}) => {
  const {width, height} = Dimensions.get('screen');
  return (
    <ScrollView className="flex-1">
      <ImageBackground
        source={IMAGES.bg}
        resizeMode="stretch"
        className="pt-10 items-center px-5"
        style={{width: width, height: height}}>
        <Image
          source={IMAGES.icon}
          className="w-[100px] h-[100px] mb-5"
          resizeMode="center"
        />
        {children}
      </ImageBackground>
    </ScrollView>
  );
};

export default Background;
