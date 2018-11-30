import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';

export default class Footer extends React.Component {

  constructor () {
    super()
    this.state = {
      slides: null
    }

    axios.get('https://uladzimir-yeudakimovich.ml/assets/i18n/en.json').then(response => {
      this.setState({ slides: response.data.footer });
      console.log(this.state.slides);
    }).catch(error => console.log(error));
  }

  render() {
    if (this.state.slides) {
      return (
        <View style={ stylesFooter.wrapper }>
          <Text style={ stylesFooter.subname }>{ this.state.slides.name }</Text>
          <Image style={ stylesFooter.icon } source={require('../../../assets/social_icons/phone.svg')} alt="icon"></Image>
        </View>
      );
    } else {
      return (
        <View style={ stylesFooter.wrapper }>
          <Text style={ stylesFooter.subname }>Loading...</Text>
        </View>
      );
    }
  }
}

const stylesFooter = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#E6F0F0'
  },
  subname: {
    paddingTop: 20,
    fontSize: 20
  },
  icon: {
    width: 200,
    height: 200
  }
});