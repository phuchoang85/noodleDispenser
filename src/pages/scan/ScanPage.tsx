import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Background from '@Src/components/Background';
import {IMAGES} from '@Src/assets/assets';
import {PermissionsAndroid} from 'react-native';
import CameraScan from './components/CameraScan';
import PageScanError from './components/PageScanError';
import {useNavigation} from '@react-navigation/native';
import {RootParamList} from '@Src/MainNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const ScanPage = () => {
  const [result, setResult] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [startCamera, setStartCamera] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
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
    try {
      if ((e.data && e.type === 'QR_CODE') || e === 0) {
        const transStringToOject = JSON.parse(e?.data);
        //{"code":"1","app":"noodleDispenser"}
        console.log('scanned data' + transStringToOject);
        if (!result && transStringToOject?.app === 'noodleDispenser') {
          Alert.alert(transStringToOject?.code);
          setResult(e);
          navigation.navigate('Infor');
          return;
        }
      }
      setStartCamera(false);
      console.log(e);
    } catch (error) {
      setStartCamera(false);
      console.log(error);
    }
  };

  if (!hasCameraPermission) {
    return (
      <View style={styles.containerPermission}>
        <Text>Camera permission is not required!</Text>
      </View>
    );
  }

  return (
    <Background>
      {startCamera || result ? (
        <>
          <Text className="font-title text-3xl text-title_red">
            WELCOME
          </Text>
          <CameraScan
            hasCameraPermission={hasCameraPermission}
            onSuccess={onSuccess}
          />
        </>
      ) : (
        <PageScanError setStartCamera={setStartCamera} />
      )}
      <View className="flex-row w-full gap-2 justify-center items-center mt-10">
        <Image source={IMAGES.scan_red} className="w-10 h-10" />
        <Text className="font-text text-lg font-bold text-text_red">
          Follow the arrow to scan card
        </Text>
      </View>

      <View className="flex-row w-full justify-between items-center absolute bottom-24">
        <View className="w-12 h-1 " />
        <TouchableOpacity
          className="w-20 h-24"
          onPress={() => setStartCamera(true)}>
          <Image
            source={IMAGES.buttun_scan}
            className="w-full h-full"
            resizeMode="center"
          />
        </TouchableOpacity>
        <Image
          source={IMAGES.arrow_right}
          className="w-12"
          resizeMode="center"
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  containerPermission: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScanPage;
