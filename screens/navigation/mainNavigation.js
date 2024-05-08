import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import Home from '../SocialMedia/components/home';
import Profile from '../SocialMedia/components/profile';
import Notification from '../SocialMedia/components/notification';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import ProfileTabContent from '../SocialMedia/components/profileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createMaterialTopTabNavigator();

// const Tab1 = () => {
//   return (
//     <View>
//       <Text>Tab1</Text>
//     </View>
//   );
// };
// const Tab2 = () => {
//   return (
//     <View>
//       <Text>Tab2</Text>
//     </View>
//   );
// };
// const Tab3 = () => {
//   return (
//     <View>
//       <Text>Tab3</Text>
//     </View>
//   );
// };

export const ProfileTabNavigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name={'Tab1'}
        component={ProfileTabContent}
        options={{tabBarLabel: 'Photos'}}
      />
      <Tabs.Screen
        name={'Tab2'}
        component={ProfileTabContent}
        options={{tabBarLabel: 'Videos'}}
      />
      <Tabs.Screen
        name={'Tab3'}
        component={ProfileTabContent}
        options={{tabBarLabel: 'Saved'}}
      />
    </Tabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
      <Drawer.Screen name={Routes.Notification} component={Notification} />
    </Drawer.Navigator>
  );
};
const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      {/* <Stack.Screen name={Routes.Home} component={Home} /> */}
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
