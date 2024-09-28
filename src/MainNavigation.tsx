import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScanPage from '@Pages/scan/ScanPage';
import Background from './components/Background';
const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Scan"
          component={ScanPage}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="detail" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
