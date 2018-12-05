import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

export default class MessagesFromLocalStorage extends React.Component {

  constructor () {
    super()
    this.state = {
      data: AsyncStorage.getItem('messages')
    }
  }

  render() {
    if (this.state.data.mess) {
      console.log(this.state.data.mess);
      return (
        <View>
          {
            this.state.data.mess.map((item, index) => {
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
      console.log(this.state.data);
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