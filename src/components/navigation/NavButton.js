import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-fontawesome';

class NavButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={{margin: 10}}>
          <FontAwesome style={this.props.style}>{this.props.icon}</FontAwesome>
        </Text>
      </TouchableOpacity>
    );
  }
}

export default NavButton;