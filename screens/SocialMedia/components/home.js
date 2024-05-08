import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Switch,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Title from './title';
import {verticalScale, horizonatlScale, scaleFontSize} from './scaling';

import UserStory from './userStory';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import UserPost from './userPost';
import {Routes} from '../../navigation/routes';

const Home = ({navigation}) => {
  const [isOn, setIsOn] = useState(false);
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  console.log(screenData);
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('../assets/images/default-profile-picture-male-icon.png'),
    },
    {
      firstName: 'Pallavi',
      id: 2,
      profileImage: require('../assets/images/profile-girl-icon.png'),
    },
    {
      firstName: 'Oliver',
      id: 3,
      profileImage: require('../assets/images/default-profile-picture-male-icon.png'),
    },
    {
      firstName: 'Riya',
      id: 4,
      profileImage: require('../assets/images/profile-girl-icon.png'),
    },
    {
      firstName: 'Olbardo',
      id: 5,
      profileImage: require('../assets/images/default-profile-picture-male-icon.png'),
    },
    {
      firstName: 'Krenta',
      id: 6,
      profileImage: require('../assets/images/profile-girl-icon.png'),
    },
    {
      firstName: 'Xavier',
      id: 7,
      profileImage: require('../assets/images/default-profile-picture-male-icon.png'),
    },
    {
      firstName: 'Nata',
      id: 8,
      profileImage: require('../assets/images/profile-girl-icon.png'),
    },
    {
      firstName: 'Joseph',
      id: 9,
      profileImage: require('../assets/images/default-profile-picture-male-icon.png'),
    },
    {
      firstName: 'Pallavi',
      id: 10,
      profileImage: require('../assets/images/profile-girl-icon.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'Pallavi',
      lastName: 'K',
      loaction: 'Solapur',
      likes: 1600,
      comments: 36,
      bookmarks: 66,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/profile-girl-icon.png'),
      id: 1,
    },
    {
      firstName: 'Allison',
      lastName: 'Becker',
      loaction: 'Boston',
      likes: 1700,
      comments: 66,
      bookmarks: 36,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/profile-girl-icon.png'),
      id: 2,
    },
    {
      firstName: 'ABC',
      lastName: 'XYZ',
      loaction: 'Boston',
      likes: 1700,
      comments: 66,
      bookmarks: 36,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/profile-girl-icon.png'),
      id: 3,
    },
    {
      firstName: 'XYZ',
      lastName: 'YUC',
      loaction: 'Boston',
      likes: 1700,
      comments: 66,
      bookmarks: 36,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/profile-girl-icon.png'),
      id: 4,
    },
    {
      firstName: 'Joseph',
      lastName: 'Becker',
      loaction: 'Boston',
      likes: 1700,
      comments: 66,
      bookmarks: 36,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/profile-girl-icon.png'),
      id: 5,
    },
    {
      firstName: 'Nata',
      lastName: 'Becker',
      loaction: 'Boston',
      likes: 1700,
      comments: 66,
      bookmarks: 36,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/profile-girl-icon.png'),
      id: 6,
    },
    {
      firstName: 'All',
      lastName: 'Becker',
      loaction: 'Boston',
      likes: 1700,
      comments: 66,
      bookmarks: 36,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/profile-girl-icon.png'),
      id: 7,
    },
    {
      firstName: 'Lison',
      lastName: 'Becker',
      loaction: 'Boston',
      likes: 1700,
      comments: 66,
      bookmarks: 36,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/profile-girl-icon.png'),
      id: 8,
    },
    {
      firstName: 'Siyan',
      lastName: 'Becker',
      loaction: 'Boston',
      likes: 1700,
      comments: 66,
      bookmarks: 36,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/profile-girl-icon.png'),
      id: 9,
    },
  ];

  return (
    <SafeAreaView>
      {/* <StatusBar backgroundColor={'blue'}></StatusBar> */}
      {/* <View style={style.header}>
          <Title title={"Let's Explore"} />
          <TouchableOpacity style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </TouchableOpacity>
        </View> */}

      {/* <Image
          style={{
            width: 200,
            height: 150,
            alignSelf: 'center',
            marginTop: 10,
            resizeMode: 'stretch',
          }}
          // source={{
          //   uri: 'https://reactnative.dev/img/tiny_logo.png',
          //   //   uri: 'https://www.vectorstock.com/royalty-free-vector/user-member-avatar-face-profile-icon-vector-22965342',
          // }}
          source={require('./assets/Images/menProfile.png')}
        /> */}
      {/* <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={userStories}
            renderItem={({item}) => (
              <UserStory
                firstName={item.firstName}
                profileImage={item.profileImage}
              />
            )}
          />
        </View> */}
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={"Let's Explore"} />

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(Routes.Profile);
                  }}
                  style={style.messageIcon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={style.switchContainer}>
                <Switch
                  value={isOn}
                  style={
                    Platform.OS === 'android' && {
                      transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                    }
                  }
                  onValueChange={value => setIsOn(value)}></Switch>
              </View>
              <View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStories}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <UserStory
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          data={userPosts}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.loaction}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                profileImage={item.profileImage}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  messageIcon: {padding: 14, borderRadius: 100, backgroundColor: '#F9FAFB'},
  header: {
    marginLeft: horizonatlScale(20),
    marginRight: horizonatlScale(10),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(6),
  },
  image: {
    width: 65,
    height: 65,
  },
  userPostContainer: {
    marginHorizontal: horizonatlScale(24),
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
