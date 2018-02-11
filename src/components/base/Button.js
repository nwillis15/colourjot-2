import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from './../../styles/colors';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: colors.navbar,
    borderRadius: 5,
    marginLeft: 70,
    marginRight: 70
  },
  textStyle: {
    alignSelf: 'center',
    color: colors.noteYellow,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
