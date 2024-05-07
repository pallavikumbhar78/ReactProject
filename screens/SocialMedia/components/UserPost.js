import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import UserProfileImage from './UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faEllipsisH,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimenesions={50}
          />
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={{color: 'black'}}>
              {props.firstName}
              {props.lastName}
            </Text>
            <Text style={{color: 'black'}}>{props.location}</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={{marginLeft: 10, flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faHeart} />
          <Text style={{marginLeft: 5}}>{props.likes}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faMessage} />
          <Text style={{marginLeft: 5}}>{props.comments}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faBookmark} />
          <Text style={{marginLeft: 5}}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserPost;

const style = StyleSheet.create({
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
});
