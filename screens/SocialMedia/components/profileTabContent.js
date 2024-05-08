import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ViewComponent,
} from 'react-native';
import React from 'react';
import {horizonatlScale, verticalScale} from './scaling';

const ProfileTabContent = () => {
  return (
    <ScrollView>
      <View style={style.profileTabContent}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;

const style = StyleSheet.create({
  profileTabContent: {
    paddingHorizontal: horizonatlScale(21),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizonatlScale(140),
    height: verticalScale(90),
    marginTop: verticalScale(11),
  },
});
