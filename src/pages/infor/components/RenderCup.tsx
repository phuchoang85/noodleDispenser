import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DATACUP} from '../types';
import {IMAGES} from '@Src/assets/assets';

const RenderCup = ({
  item,
  _handleSelectCup,
}: {
  item: DATACUP;
  _handleSelectCup: (id: number, noodleLeft: number, status: boolean) => void;
}) => {
  const imagereturn = () => {
    if (item.id === 1) {
      return IMAGES.cup_one;
    } else if (item.id === 2) {
      return IMAGES.cup_two;
    } else {
      return IMAGES.cup_three;
    }
  };
  return (
    <TouchableOpacity
      onPress={() => _handleSelectCup(item.id, item.noodleLeft, item.status)}
      className="w-20 h-36 items-center justify-center relative">
      {item.noodleLeft !== 0 ? (
        <>
          <Image
            className="w-20 h-36 z-20"
            resizeMode="contain"
            source={imagereturn()}
          />
          <Text className="font-payone text-xs" />
        </>
      ) : (
        <>
          <Image
            className="w-24 h-36 z-20"
            resizeMode="contain"
            source={IMAGES.cup_out}
          />
          <Text className="text-gray font-payone text-xs">Unavailable</Text>
        </>
      )}
      {item.status && item.noodleLeft !== 0 && (
        <Image
          className="w-24 h-24 absolute self-center z-0"
          resizeMode="contain"
          source={IMAGES.select_cup}
        />
      )}
    </TouchableOpacity>
  );
};

export default RenderCup;
