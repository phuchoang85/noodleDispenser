import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '@Src/assets/assets';

const PageScanError = ({
  setStartCamera,
}: {
  setStartCamera: (value: boolean) => void;
}) => {
  return (
    <>
      <Text className="font-title text-3xl text-title_red">ERROR</Text>
      <Text className="my-5 font-text text-xl text-title_red font-bold">
        Can not recongnize your ID card
      </Text>
      <TouchableOpacity
        className="bg-color_button_again rounded-lg px-3 py-2"
        onPress={() => setStartCamera(true)}>
        <Text className="font-text text-sm font-bold text-white">
          Please scan again.
        </Text>
      </TouchableOpacity>
      <Image className="w-20 h-24 mt-5" source={IMAGES.error_scan} />
    </>
  );
};

export default PageScanError;
