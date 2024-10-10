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
import {useAppDispatch} from '@Src/redux/useRedux';
import {setCode} from '@Src/redux/selector/CodeSlice';
const ScanPage = () => {
  const dispatch = useAppDispatch();
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [startCamera, setStartCamera] = useState(true);
  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (!granted) {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
          ).then(granted => {
            setHasCameraPermission(
              granted === PermissionsAndroid.RESULTS.GRANTED,
            );
          });
        }
        setHasCameraPermission(granted);
      } catch (err) {
        console.log('error:' + err);
      }
    };
    requestCameraPermission();
  }, []);

  const onSuccess = async (e: any) => {
    try {
      if ((e.data && e.type === 'QR_CODE') || e === 0) {
        const transStringToOject = JSON.parse(e?.data);
        //{"code":"1","app":"noodleDispenser"}
        console.log('scanned data' + transStringToOject);
        if (transStringToOject?.app === 'noodleDispenser') {
          dispatch(setCode(transStringToOject?.code));
          return;
        }
      }
      Alert.alert('Lỗi', 'Không phải mã code của app');
    } catch (error) {
      Alert.alert('Lỗi', 'Không phải mã code của app');
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
      {startCamera ? (
        <>
          <Text className="font-title text-3xl text-title_red">WELCOME</Text>
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
