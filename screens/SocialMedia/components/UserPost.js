import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import UserProfileImage from './userProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faEllipsisH,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {verticalScale} from './scaling';
const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.postConatiner}>
        <View style={style.postItemContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimenesions={50}
          />
          <View style={style.userNameContainer}>
            <Text style={style.userNameText}>
              {props.firstName}
              {props.lastName}
            </Text>
            <Text style={style.userNameText}>{props.location}</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={style.iconContainer}>
        <View style={style.favouriteIcon}>
          <FontAwesomeIcon icon={faHeart} />
          <Text style={style.iconName}>{props.likes}</Text>
        </View>
        <View style={style.messageIcon}>
          <FontAwesomeIcon icon={faMessage} />
          <Text style={style.iconName}>{props.comments}</Text>
        </View>
        <View style={style.messageIcon}>
          <FontAwesomeIcon icon={faBookmark} />
          <Text style={style.iconName}>{props.bookmarks}</Text>
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
    marginVertical: verticalScale(20),
  },
  postConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postItemContainer: {
    flexDirection: 'row',
  },
  userNameContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  userNameText: {
    color: 'black',
  },
  userPostContainer: {
    marginTop: verticalScale(35),
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  iconContainer: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  favouriteIcon: {
    flexDirection: 'row',
  },
  iconName: {
    marginLeft: 5,
  },
  messageIcon: {
    flexDirection: 'row',
    marginLeft: 27,
  },
});
