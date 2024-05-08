import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {ProfileTabNavigation} from '../../navigation/mainNavigation';

const Profile = ({navigation}) => {
  return (
    // <View>
    //   <TouchableOpacity onPress={() => navigation.goBack()}>
    //     <Text>Go Back</Text>
    //   </TouchableOpacity>
    //   <Text>Welcome To Profile</Text>
    // </View>
    <SafeAreaView contentContainerStyle={{flexGrow: 1}}>
      <ScrollView contentContainerStyle={style.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageBorder}>
            <Image
              source={require('../assets/images/default_profile.png')}
              style={style.profileImage}></Image>
          </View>
        </View>
        <Text style={style.textName}>Pallavi K</Text>
        <View style={style.container}>
          <View>
            <Text style={style.textFollowingNumber}>36</Text>
            <Text style={style.textFollowing}>Following</Text>
          </View>
          <View>
            <Text style={style.textFollowingNumber}>30M</Text>
            <Text style={style.textFollowing}>Followers</Text>
          </View>
          <View>
            <Text style={style.textFollowingNumber}>66</Text>
            <Text style={style.textFollowing}>Posts</Text>
          </View>
        </View>
        <View>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const style = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
  profileImage: {
    width: 110,
    height: 110,
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  profileImageBorder: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 4,
    borderRadius: 110,
  },
  textName: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  textFollowing: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  textFollowingNumber: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 30,
  },
});
