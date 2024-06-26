import React from 'react';
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

const App = () => {
  const [text, setText] = useState('Hello World!');
  const [count, setCount] = useState(0);
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  return (
    <SafeAreaView>
      <View>
        <Image
          style={style.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={style.textTitle} Press={() => setText('Hello React')}>
          {text}
        </Text>
        <TextInput
          style={style.inputTextName}
          placeholder="Enter username"></TextInput>

        <View style={style.switchContainer}>
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
      </View>
    </SafeAreaView>
  );
};

export default App;

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
  switchContainer: {
    flexDirection: 'row',
  },
});
