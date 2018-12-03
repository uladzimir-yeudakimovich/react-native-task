import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class Form extends React.Component {

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
        <View style={ stylesForm.title }>
          <Text style={ stylesForm.contacts_title }>{ this.state.slides.name }</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={ stylesForm.contacts_title }>Loading...</Text>
        </View>
      );
    }
  }
}

const stylesForm = StyleSheet.create({
  title: {
    alignItems: 'center',
  },
  contacts_title: {
    fontSize: 20
  }
});