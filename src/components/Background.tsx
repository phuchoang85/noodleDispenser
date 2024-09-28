import {
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
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
        {children}
      </ImageBackground>
    </ScrollView>
  );
};

export default Background;
