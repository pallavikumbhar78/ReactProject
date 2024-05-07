import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Switch,
  Text,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

const UserInfoScreen = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [showInfo, setShowInfo] = useState(false);

  const handleToggle = () => {
    setShowInfo(!showInfo);
  };
  return (
    <ScrollView>
      <TextInput
        style={style.inputTextName}
        placeholder="Enter Name"
        onChangeText={text => setName(text)}></TextInput>
      <TextInput
        style={style.inputTextName}
        placeholder="Enter Age"
        onChangeText={text => setAge(text)}></TextInput>
      <Pressable
        style={style.button}
        onPress={() => Alert.alert('Information Submitted!')}>
        <Text>Submit</Text>
      </Pressable>
      <View style={style.switchContainer}>
        <Text>Show Information</Text>
        <Switch value={showInfo} onValueChange={handleToggle}></Switch>
      </View>

      {showInfo && (
        <View style={style.showInfoContainer}>
          <Text>Name : {name}</Text>
          <Text>Age : {age}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default UserInfoScreen;

const style = StyleSheet.create({
  inputTextName: {
    borderWidth: 2,
    marginTop: 30,
    paddingBottom: 10,
    borderColor: '#3662AA',
    fontSize: 20,
    borderRadius: 10,
    margin: 10,
    marginBottom: 20,
    paddingStart: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  showInfoContainer: {
    marginTop: 10,
  },
});
