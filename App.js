import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './app/src/components/Header.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});