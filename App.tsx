import MainNavigation from '@Src/MainNavigation';
import {persistor, store} from '@Src/redux/store';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
function App(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
        translucent
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
