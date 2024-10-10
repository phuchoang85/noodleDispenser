import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IMAGES} from '@Src/assets/assets';

const BackgroundInfor = ({children}: {children: React.ReactNode}) => {
  return (
    <View
      className="bg-white rounded-XXI relative w-full max-w-[500px]"
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 30,
        elevation: 10,
      }}>
      <View
        className="bg-background_yellow rounded-XVII m-1 border-border_brown"
        style={styles.border}>
        <View className=" z-20">{children}</View>
        <Image
          source={IMAGES.back_scan}
          className="absolute top-0 right-0 z-10 w-full h-28"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {borderWidth: 1},
});

export default BackgroundInfor;
