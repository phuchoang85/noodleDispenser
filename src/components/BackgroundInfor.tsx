import {View, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {IMAGES} from '@Src/assets/assets';

const BackgroundInfor = ({children}: {children: React.ReactNode}) => {
  const childRef = useRef<View>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (childRef.current) {
      childRef.current.measure(
        (x, y, childWidth, childHeight, pageX, pageY) => {
          // Sử dụng 'childWidth' và 'childHeight' để điều chỉnh bố cục
          setWidth(childWidth);
          setHeight(childHeight);
          console.log(childHeight);
        },
      );
    }
  }, [children]);

  return (
    <View className="relative">
      <View ref={childRef} className="bg-white rounded-XXI">
        <View
          className="bg-background_yellow rounded-XVII m-1 border-border_brown"
          style={{borderWidth: 1}}>
          <View>{children}</View>
          <Image
            source={IMAGES.back_scan}
            style={{width: width + 10, height: height}}
            className="absolute top-0 z-10 right-0"
          />
        </View>
      </View>
    </View>
  );
};

export default BackgroundInfor;
