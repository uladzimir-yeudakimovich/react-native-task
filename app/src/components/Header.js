import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  render() {
    return (
      <View>
        <Text style={ stylesHeader.name }>Hello react native!</Text>
        <Image source={require('../../../assets/icon.png')}></Image>
      </View>
    );
  }
}

const stylesHeader = StyleSheet.create({
  name: {
    fontSize: 40
  },
  logoImg: {
    width: '100%',
    height: '50%'
  }
});