import React from 'react';
import { StyleSheet, View } from 'react-native';
import MessagesFromServer from './MessagesFromServer';
import MessagesFromLocalStorage from './MessagesFromLocalStorage';
import Contacts from './Contacts';
import RegisterForm from './RegisterForm';

export default class Footer extends React.Component {

  render() {
      return (
        <View style={ stylesFooter.wrapper }>
          <MessagesFromServer/>
          <MessagesFromLocalStorage/>
          <Contacts/>
          <RegisterForm/>
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