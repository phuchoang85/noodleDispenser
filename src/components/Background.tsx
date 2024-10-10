import {
  ImageBackground,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IMAGES} from '@Assets/assets';
import {useAppDispatch, useAppSelector} from '@Src/redux/useRedux';
import {logout} from '@Src/redux/selector/CodeSlice';

const Background = ({children}: {children: React.ReactNode}) => {
  const {width, height} = Dimensions.get('screen');
  const code = useAppSelector(state => state.root.code.code);
  const distpatch = useAppDispatch();
  return (
    <ScrollView className="flex-1">
      <ImageBackground
        source={IMAGES.bg}
        resizeMode="stretch"
        className="pt-10 items-center px-5 relative"
        style={{width: width, height: height}}>
        <Image
          source={IMAGES.icon}
          className="w-[100px] h-[100px] mb-5"
          resizeMode="center"
        />
        {code && (
          <TouchableOpacity
            className="w-7 h-7 absolute right-5 top-20"
            onPress={() => distpatch(logout())}>
            <Image source={IMAGES.log_out} className="w-full h-full" />
          </TouchableOpacity>
        )}
        {children}
      </ImageBackground>
    </ScrollView>
  );
};

export default Background;
