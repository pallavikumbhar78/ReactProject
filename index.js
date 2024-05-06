/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import UserInfoScreen from './screens/UserinfoScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => UserInfoScreen);
