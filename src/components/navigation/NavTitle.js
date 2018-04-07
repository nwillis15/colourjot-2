import React from 'react';
import { Text, View } from 'react-native';
import navStyles from './../../styles/navStyles';

const NavTitle = () => {
  return (
    <View>
      <Text style={navStyles.title}>
        <Text style={navStyles.titleGreen}>C</Text>
        <Text style={navStyles.titleYellow}>o</Text>
        <Text style={navStyles.titleBlue}>l</Text>
        <Text style={navStyles.titleRed}>o</Text>
        <Text style={navStyles.titlePurple}>u</Text>
        <Text style={navStyles.titleBlue}>r</Text>
        <Text style={navStyles.titleGreen}>J</Text>
        <Text style={navStyles.titleOrange}>o</Text>
        <Text style={navStyles.titleBlue}>t </Text>
        <Text style={navStyles.titleGreen}>2</Text>
      </Text>
    </View>
  );
};

export default NavTitle;