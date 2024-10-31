import {Text, View} from 'react-native';
import React from 'react';
import {DATACUP} from '../types';
import RenderCup from './RenderCup';
import {useAppDispatch} from '@Src/redux/useRedux';
import {updateStatus} from '@Src/redux/selector/NoodlesSlice';

const SelectCup = ({dataCup}: {dataCup: DATACUP[]}) => {
  const dispatch = useAppDispatch();
  const countCup =
    (!dataCup[0].noodleLeft || dataCup[0].noodleLeft == "null"  ? 1 : 0) +
    (!dataCup[1].noodleLeft || dataCup[1].noodleLeft == "null" ? 1 : 0) +
    (!dataCup[2].noodleLeft || dataCup[2].noodleLeft == "null" ? 1 : 0);
  const _handleSelectCup = (
    id: number,
    noodleLeft: string | null,
    status: boolean,
  ) => {
    if (!noodleLeft || noodleLeft == "null") {
      dispatch(updateStatus({id: id, status: !status}));
    }
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
          {countCup + ' '}
        </Text>
        cups of noodles left this month
      </Text>
    </>
  );
};

export default SelectCup;
