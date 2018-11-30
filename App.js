import React from 'react';
import { ScrollView } from 'react-native';
import Header from './app/src/components/Header';
import Main from './app/src/components/Main';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header/>
        <Main/>
      </ScrollView>
    );
  }
}