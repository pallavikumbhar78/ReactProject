import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import UserProfileImage from './UserProfileImage';

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

// UserStory.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   profileImage: PropTypes.any.isRequired,
// };

export default UserStory;

const style = StyleSheet.create({
  image: {
    width: 65,
    height: 65,
  },
  userStoryContainer: {
    marginRight: 20,
  },
  firstName: {
    fontSize: 14,
    color: 'black',
    marginTop: 8,
    textAlign: 'center',
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: 3,
    borderRadius: 50,
  },
});
