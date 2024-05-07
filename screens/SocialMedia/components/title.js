import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const Title = props => {
  return (
    <Text
      style={{
        margin: 16,
        marginStart: 4,
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
      }}>
      {props.title}
    </Text>
  );
};

// Title.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Title;
