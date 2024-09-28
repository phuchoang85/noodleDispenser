import Background from '@Components/Background';
import MainNavigation from '@Src/MainNavigation';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor='rgba(0,0,0,0)' translucent />
        <MainNavigation />
    </SafeAreaView>
  );
}

export default App;
