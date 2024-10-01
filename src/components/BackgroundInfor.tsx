import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {IMAGES} from '@Src/assets/assets';

const BackgroundInfor = ({children}: {children: React.ReactNode}) => {
  const childRef = useRef<View>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (childRef.current) {
      childRef.current.measure((childWidth, childHeight) => {
        // Sử dụng 'childWidth' và 'childHeight' để điều chỉnh bố cục
        setWidth(childWidth);
        setHeight(childHeight);
        console.log('width:' + childWidth);
        console.log('height:' + childHeight);
      });
    }
  }, [children]);

  return (
    <View className="relative w-full max-w-[500px]">
      <View ref={childRef} className="bg-white rounded-XXI">
        <View
          className="bg-background_yellow rounded-XVII m-1 border-border_brown"
          style={styles.border}>
          <View>{children}</View>
          <Image
            source={IMAGES.back_scan}
            style={{width: width + 10, height: height}}
            className="absolute top-0 S right-0"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {borderWidth: 1},
});

export default BackgroundInfor;
