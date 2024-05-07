import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {scaleFontSize} from './scaling';

const Title = props => {
  return <Text style={style.titleText}>{props.title}</Text>;
};

export default Title;

const style = StyleSheet.create({
  titleText: {
    margin: 16,
    marginStart: 4,
    fontSize: scaleFontSize(24),
    color: 'black',
    fontWeight: 'bold',
  },
});
