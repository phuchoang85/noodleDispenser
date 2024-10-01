import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScanPage from '@Pages/scan/ScanPage';
import PageInfor from './pages/infor/PageInfor';

export type RootParamList = {
  Scan: any;
  Infor: any;
};
const MainNavigation = () => {
  const Stack = createNativeStackNavigator<RootParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scan">
        <Stack.Screen
          name="Scan"
          component={ScanPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Infor"
          component={PageInfor}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
