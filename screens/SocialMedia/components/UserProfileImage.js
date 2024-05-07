import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const UserProfileImage = props => {
  return (
    <View style={style.userImageContainer}>
      <Image
        source={props.profileImage}
        style={{width: props.imageDimenesions, height: props.imageDimenesions}}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimenesions: PropTypes.number.isRequired,
};

export default UserProfileImage;

const style = StyleSheet.create({
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: 3,
    borderRadius: 50,
  },
});
