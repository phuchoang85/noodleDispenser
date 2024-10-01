import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BackgroundInfor from '@Src/components/BackgroundInfor';
const {width: MAX_WIDTH} = Dimensions.get('screen');
const CameraScan = ({
  hasCameraPermission,
  onSuccess,
}: {
  hasCameraPermission: Boolean;
  onSuccess: (e: any) => void;
}) => {
  const scannerRef = useRef<QRCodeScanner>(null);
  useEffect(() => {
    if (hasCameraPermission) {
      scannerRef.current?.reactivate();
    }
  }, [hasCameraPermission]);
  return (
    <View className="mt-3">
      <BackgroundInfor>
        {hasCameraPermission && (
          <View
            style={styles.cameraStyle}
            className="overflow-hidden m-1 rounded-XIII">
            <QRCodeScanner
              reactivate={true}
              showMarker={true}
              ref={scannerRef}
              onRead={onSuccess}
              containerStyle={styles.cameraStyle}
              cameraStyle={styles.cameraStyle}
              markerStyle={styles.markerStyle}
            />
          </View>
        )}
      </BackgroundInfor>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraStyle: {
    height: 180,
    zIndex: 20,
    maxWidth: 500,
    width: MAX_WIDTH - 50,
  },
  markerStyle: {
    width: 250,
    height: 150,
    borderColor: 'transparent',
  },
});

export default CameraScan;
