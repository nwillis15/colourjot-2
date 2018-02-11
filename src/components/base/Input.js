import React from 'react';
import { TextInput, View } from 'react-native';
import colors from './../../styles/colors';

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: colors.black,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30
  }
};

export { Input };
