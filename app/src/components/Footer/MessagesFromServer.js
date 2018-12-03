import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class MessagesFromServer extends React.Component {

  constructor () {
    super()
    this.state = {
      slides: null,
      data: null
    }

    axios.get('https://uladzimir-yeudakimovich.ml/assets/i18n/en.json').then(response => {
      this.setState({ data: response.data.footer.message });
    }).catch(error => console.log(error));

    axios.get('https://uladzimir-yeudakimovich.ml/assets/message.json').then(response => {
      this.setState({ slides: response.data.mess });
    }).catch(error => console.log(error));
  }

  render() {
    if (this.state.slides && this.state.data) {
      return (
        <View style={ stylesMessagesFromServer.container }>
          <View style={ stylesMessagesFromServer.title }>
            <Text style={ stylesMessagesFromServer.contacts_title }>{ this.state.data.comments }</Text>
          </View>
          <View style={ stylesMessagesFromServer.row }>
            <Text>{ this.state.data.name }</Text>
            <Text>{ this.state.data.email }</Text>
            <Text>{ this.state.data.messages }</Text>
          </View>
          {
            this.state.slides.map((item, index) => {
              return  <View style={ stylesMessagesFromServer.row } key={index}>
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

const stylesMessagesFromServer = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 10
  },
  title: {
    alignItems: 'center',
  },
  contacts_title: {
    fontSize: 20
  },
  row: {
    padding: 5,
    backgroundColor: 'yellow',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000'
  },
});