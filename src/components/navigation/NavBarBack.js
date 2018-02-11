import { View, Text } from 'react-native';
import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import { Actions } from 'react-native-router-flux';
import { Icons } from 'react-native-fontawesome';
import NavTitle from './NavTitle';
import NavButton from './NavButton';
import navStyles from './../../styles/navStyles';

class NavBarBack extends Component {
  render() {
    return (
      <View style={navStyles.container}>
        <NavigationBar
          style={navStyles.container}
          title = {<NavTitle/>}
          leftButton={
            <NavButton
              style={navStyles.button}
              onPress={() => Actions.pop()}
              icon={Icons.arrowLeft}
            />
          }
        />
      </View>
    );
  }
}

export default NavBarBack;