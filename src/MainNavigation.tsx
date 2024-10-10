import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScanPage from '@Pages/scan/ScanPage';
import PageInfor from './pages/infor/PageInfor';
import FinishPage from './pages/finish/FinishPage';
import {useAppSelector} from './redux/useRedux';

export type RootParamList = {
  Scan: any;
  Infor: any;
  Done: any;
};
const MainNavigation = () => {
  const Stack = createNativeStackNavigator<RootParamList>();
  const code = useAppSelector(state => state.root.code.code);
  return (
    <NavigationContainer>
      {code ? (
        <Stack.Navigator initialRouteName='Infor'>
          <Stack.Screen
            name="Infor"
            component={PageInfor}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Done"
            component={FinishPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Scan"
            component={ScanPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigation;
