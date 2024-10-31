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
    quantityTypeOne: string | null;
    quantityTypeTwo: string | null;
    quantityTypeThree: string | null;
  } => {
    const body = {
      quantityTypeOne: dataCup[0].noodleLeft,
      quantityTypeTwo: dataCup[1].noodleLeft,
      quantityTypeThree: dataCup[2].noodleLeft,
    };

    return body;
  };

  const submit = async () => {
    try {
      const dayNow = new Date();
      const data = selector.noodel.data;
      const update = await data.map(ele =>
        ele.status && (!ele.noodleLeft || ele.noodleLeft == "null")
          ? {...ele, noodleLeft: dayNow.toISOString(), status: false}
          : ele,
      );
      dispatch(updateData(update));
      if (selector.code.code)
        await updateInfo(selector.code.code, transformDataCup(update));
      Alert.alert('Thành công', 'Đã lưu thành công');
      navigation.navigate('Done');
    } catch (error) {
      console.log(error);
      Alert.alert('Lỗi', 'Đã có lỗi xả ra');
    }
  };

  const checkDate = (date: string) => {
    const dateNow = new Date();
    const dateCup = new Date(date);

    // Tính toán khoảng cách giữa hai ngày theo tháng
    const diffMonths =
      (dateNow.getFullYear() - dateCup.getFullYear()) * 12 +
      (dateNow.getMonth() - dateCup.getMonth());

    return diffMonths >= 1;

    // const diffMilliseconds = dateNow.getTime() - dateCup.getTime(); // Tính khoảng cách theo milliseconds
    // return diffMilliseconds >= 15000;
  };

  const check = (noodles: {
    quantityTypeOne: string | null;
    quantityTypeTwo: string | null;
    quantityTypeThree: string | null;
  }) => {
    let countCheck = 0;
    if (noodles.quantityTypeOne && checkDate(noodles.quantityTypeOne))
      countCheck += 1;

    if (noodles.quantityTypeTwo && checkDate(noodles.quantityTypeTwo))
      countCheck += 1;

    if (noodles.quantityTypeThree && checkDate(noodles.quantityTypeThree))
      countCheck += 1;

    return countCheck > 0;
  };

  useEffect(() => {
    if (selector.code.code) {
      const data = getInfo(selector.code?.code);
      data
        .then(async (data: any) => {
          if (check(data.noodles) && selector.code.code) {
            await updateInfo(selector.code?.code, {
              quantityTypeOne: "null",
              quantityTypeTwo: "null",
              quantityTypeThree: "null",
            });
          } else {
            dispatch(updateQuantity(data?.noodles));
          }
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
