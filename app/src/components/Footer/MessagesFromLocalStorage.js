import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import axios from 'axios';

export default class MessagesFromLocalStorage extends React.Component {

  constructor () {
    super()
    this.state = {
      data: null
    }
    
    axios.get('https://uladzimir-yeudakimovich.ml/assets/message.json').then(response => {
      this.setState({ data: response.data.mess });
    }).catch(error => console.log(error));
  }

  render() {
    if (this.state.data) {
      return (
        <View>
          {
            this.state.data.map((item, index) => {
              return  <View style={ stylesMessagesFromLocalStorage.row } key={index}>
                        <Text>{ item.name }</Text>
                        <Text>{ item.email }</Text>
                        <Text>{ item.message }</Text>
                      </View>;
              })
          }
        </View>
      );
    } else {
      return (
        <View></View>
      );
    }
  }
}

const stylesMessagesFromLocalStorage = StyleSheet.create({
  row: {
    padding: 5,
    marginHorizontal: 10,
    backgroundColor: 'yellow',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000'
  }
});