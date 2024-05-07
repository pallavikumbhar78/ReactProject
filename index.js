/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import UserInfoScreen from './screens/UserinfoScreen';
import SocialMedia from './screens/SocialMedia/SocialMedia';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SocialMedia);
