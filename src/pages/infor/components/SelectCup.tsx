import {Text, View} from 'react-native';
import React from 'react';
import {DATACUP} from '../types';
import RenderCup from './RenderCup';

const SelectCup = ({
  dataCup,
  setDataStatusCup,
}: {
  dataCup: DATACUP[];
  setDataStatusCup: (data: DATACUP[]) => void;
}) => {
  const countCup = dataCup.reduce((first: DATACUP, second: DATACUP) => {
    return {
      ...first,
      noodleLeft: first.noodleLeft + second.noodleLeft,
    };
  });

  const _handleSelectCup = (id: number) => {
    const updatedData = dataCup.map((ele: DATACUP) =>
      ele.id === id && ele.noodleLeft !== 0
        ? {
            ...ele,
            status: !ele.status,
          }
        : ele,
    );

    setDataStatusCup(updatedData);
  };
  return (
    <>
      <View className="flex-row my-5 w-full justify-between">
        {dataCup?.map(item => (
          <RenderCup
            key={item.id}
            item={item}
            _handleSelectCup={_handleSelectCup}
          />
        ))}
      </View>
      <Text className="font-payone text-xs text-color_brown_left">
        <Text className="font-payone text-lg text-color_red_left">
          {countCup.noodleLeft + ' '}
        </Text>
        cups of noodles left this month
      </Text>
    </>
  );
};

export default SelectCup;
