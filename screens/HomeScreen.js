import React, {useEffect} from 'react';
import {
  View,
  TextInput,
  Image,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  Switch,
} from 'react-native';
import {useState} from 'react';
import {useToggle} from '../hooks/useToggle';

const HomeScreen = () => {
  const [text, setText] = useState('Hello World!');
  const [count, setCount] = useState(0);
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [isOn, setIsOn] = useToggle(false);

  useEffect(() => {
    console.log('The text has been changed');
  }, [text]);
  return (
    <SafeAreaView>
      <View>
        <Image
          style={style.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={style.textTitle} onPress={() => setText('Hello React')}>
          {text}
        </Text>
        <TextInput
          style={style.inputTextName}
          placeholder="Enter username"></TextInput>

        <View style={style.switchText}>
          <Text>Keep Logged In</Text>
          <Switch
            value={keepLoggedIn}
            onValueChange={value => setKeepLoggedIn(value)}></Switch>
        </View>

        <Button
          title={`Clicked ${count} times`}
          onPress={() => {
            setCount(count + 1);
          }}
        />
        {/* <Image
          source={require('./assets/Images/loginLogo.png')}
          style={{width: 50, height: 50}}
        /> */}
        <Text>{isOn ? 'ON' : 'OFF'}</Text>
        <Button title={'Toggle'} onPress={setIsOn}></Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
  image: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
    resizeMode: 'stretch',
  },
  textTitle: {
    marginTop: 10,
    fontSize: 22,
  },
  switchText: {
    flexDirection: 'row',
  },
});
