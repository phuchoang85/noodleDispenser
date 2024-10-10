import {ActivityIndicator, Alert, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Background from '@Src/components/Background';
import SelectCup from './components/SelectCup';
import Information from './components/Information';
import ButtonCustom from '@Src/components/ButtonCustom';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from '@Src/MainNavigation';
import {useAppDispatch, useAppSelector} from '@Src/redux/useRedux';
import usePageInfor from './hooks/usePageInfor';
import {logout} from '@Src/redux/selector/CodeSlice';
import {updateData, updateQuantity} from '@Src/redux/selector/NoodlesSlice';
import {DATACUP} from './types';

const PageInfor = () => {
  const [loading, setLoading] = useState(true);
  const {getInfo, updateInfo} = usePageInfor();
  const selector = useAppSelector(state => state.root);
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const dispatch = useAppDispatch();
  const transformDataCup = (
    dataCup: DATACUP[],
  ): {
    quantityTypeOne: number;
    quantityTypeTwo: number;
    quantityTypeThree: number;
  } => {
    return dataCup.reduce(
      (acc, item) => {
        switch (item.id) {
          case 1:
            acc.quantityTypeOne += item.noodleLeft;
            break;
          case 2:
            acc.quantityTypeTwo += item.noodleLeft;
            break;
          case 3:
            acc.quantityTypeThree += item.noodleLeft;
            break;
          default:
            break;
        }
        return acc;
      },
      {
        quantityTypeOne: 0,
        quantityTypeTwo: 0,
        quantityTypeThree: 0,
      },
    );
  };

  const submit = async () => {
    try {
      const data = selector.noodel.data;

      const update = await data.map(ele =>
        ele.status && ele.noodleLeft !== 0
          ? {...ele, noodleLeft: ele.noodleLeft - 1}
          : ele,
      );
      dispatch(updateQuantity(update));
      if (selector.code.code)
        await updateInfo(selector.code.code, transformDataCup(update));
      Alert.alert('Thành công', 'Đã lưu thành công');
      navigation.navigate('Done');
    } catch (error) {
      console.log(error);
      Alert.alert('Lỗi', 'Đã có lỗi xả ra');
    }
  };

  useEffect(() => {
    if (selector.code.code) {
      const data = getInfo(selector.code?.code);
      data
        .then((data: any) => {
          dispatch(updateQuantity(data?.noodles));
        })
        .catch(data => {
          console.log(data);
          Alert.alert('Error', 'Không tìm thấy thông tin người dùng');
          dispatch(logout());
        })
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <Background>
      {loading ? (
        <View className="flex justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <Text className="mb-4 font-title text-3xl text-title_red">
            INFORMATION
          </Text>
          <Information data={selector.code} />

          <SelectCup dataCup={selector.noodel.data} />

          <View className="absolute bottom-36">
            <ButtonCustom content="Get your noodles" event={submit} />
          </View>
        </>
      )}
    </Background>
  );
};

export default PageInfor;
