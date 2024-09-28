import {
  View,
  Text,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Background from '@Src/components/Background';
import {IMAGES} from '@Src/assets/assets';
import {PermissionsAndroid} from 'react-native';
import CameraScan from './components/CameraScan';
const ScanPage = () => {
  const [result, setResult] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        setHasCameraPermission(granted);
      } catch (err) {
        console.log('error:' + err);
      }
    };
    requestCameraPermission();
  }, []);

  const onSuccess = (e: any) => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);
    console.log(e);
    setResult(e);
  };

  if (!hasCameraPermission) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Camera permission is not required!</Text>
      </View>
    );
  }

  return (
    <Background>
      <Image
        source={IMAGES.icon}
        className="w-[100px] h-[100px]"
        resizeMode="center"
      />
      <Text className="mt-5 font-title text-3xl text-title_red">WELCOME</Text>
      <CameraScan
        hasCameraPermission={hasCameraPermission}
        onSuccess={onSuccess}
      />
      <View className="flex-row w-full gap-2 justify-center items-center mt-10">
        <Image source={IMAGES.scan_red} className="w-10 h-10" />
        <Text className="font-text text-lg text-text_red">
          Follow the arrow to scan card
        </Text>
      </View>

      <View className="flex-row w-full justify-between items-center absolute bottom-24">
        <View className="w-12 h-1 " />
        <Image
          source={IMAGES.buttun_scan}
          className="w-20 h-24"
          resizeMode="center"
        />
        <Image
          source={IMAGES.arrow_right}
          className="w-12"
          resizeMode="center"
        />
      </View>
    </Background>
  );
};

export default ScanPage;
