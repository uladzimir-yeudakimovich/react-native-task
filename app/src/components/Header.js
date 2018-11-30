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
      <View style={ stylesHeader.wrapper }>
        <Text style={ stylesHeader.subname }>{ header.position }</Text>
        <Text style={ stylesHeader.name }>{ header.name }</Text>
        <Image style={ stylesHeader.logo } source={require('../../../assets/logo.jpg')} alt="logo_phone"></Image>
        <Text style={ stylesHeader.description }>&nbsp;{ header.description }</Text>
      </View>
    );
  }
}

const header = {
  position: "Software Engineer",
  name: "Uladzimir Yeudakimovich",
  description: "A few words about me. I graduated from Rolling Scopes School in EPAM Systems with a specialization in front-end development. I work as software engineer for OCS Innovation Company (OCSICO®). I use frameworks Angular, AngularJS, Angular Material and Bootstrap, Ajax technology, jQuery library, webpack collector, LESS and SASS preprocessors, Git version control system. I'm experienced in the React, React Native and Vue frameworks.",
}

const stylesHeader = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#3a3842'
  },
  subname: {
    paddingTop: 60,
    color: 'white'
  },
  name: {
    paddingBottom: 15,
    fontSize: 24,
    color: 'white'
  },
  logo: {
    borderRadius: 100
  },
  description: {
    padding: 15,
    color: 'white'
  }
});