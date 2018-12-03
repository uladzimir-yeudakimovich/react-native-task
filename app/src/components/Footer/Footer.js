import React from 'react';
import { StyleSheet, View } from 'react-native';
import Contacts from './Contacts';
import Form from './Form';

export default class Footer extends React.Component {

  render() {
      return (
        <View style={ stylesFooter.wrapper }>
          <Contacts/>
          <Form/>
        </View>
      );
  }
}

const stylesFooter = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    backgroundColor: '#E6F0F0'
  }
});