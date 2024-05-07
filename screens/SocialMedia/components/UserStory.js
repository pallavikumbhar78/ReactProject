import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import UserProfileImage from './userProfileImage';
import {verticalScale} from './scaling';
import {horizonatlScale} from './scaling';
import {scaleFontSize} from './scaling';

const UserStory = props => {
  return (
    <View style={style.userStoryContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimenesions={65}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

export default UserStory;

const style = StyleSheet.create({
  userStoryContainer: {
    marginRight: horizonatlScale(20),
  },
  firstName: {
    fontSize: scaleFontSize(14),
    color: 'black',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
});
