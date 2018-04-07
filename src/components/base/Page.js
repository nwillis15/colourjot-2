import React from 'react';
import { View } from 'react-native';
import colors from './../../styles/colors';

const Page = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: colors.pageBackground,
    flex: 1,
    paddingTop: '10%'
  }
};

export { Page };
