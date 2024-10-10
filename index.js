/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {firebaseConfig}  from '@Src/services/firebase';
import firebase from '@react-native-firebase/app'; // Import Firebase 
if (!firebase?.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
AppRegistry.registerComponent(appName, () => App);
