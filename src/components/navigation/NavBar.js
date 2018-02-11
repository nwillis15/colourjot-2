import { View, Text } from 'react-native';
import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import NavTitle from './NavTitle';
import navStyles from './../../styles/navStyles';

class NavBar extends Component {
  render() {
    return (
      <View style={navStyles.container}>
        <NavigationBar
          style={navStyles.container}
          title = {<NavTitle/>}
        />
      </View>
    );
  }
}

export default NavBar;