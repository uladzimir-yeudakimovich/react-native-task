import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import axios from 'axios';
import SvgUri from 'react-native-svg-uri';

export default class Contacts extends React.Component {

  constructor () {
    super()
    this.state = {
      slides: null
    }

    axios.get('https://uladzimir-yeudakimovich.github.io/assets/i18n/en.json').then(response => {
      this.setState({ slides: response.data.footer });
    }).catch(error => console.log(error));
  }

  render() {
    if (this.state.slides) {
      return (
        <View>
          <View style={ stylesContacts.title }>
            <Text style={ stylesContacts.contacts_title }>{ this.state.slides.name }</Text>
          </View>
          <View style={ stylesContacts.row }>
            <SvgUri style={ stylesContacts.icon } source={require('../../../../assets/social_icons/phone.svg')} alt="phone"></SvgUri>
            <Text style={ stylesContacts.click } onPress={() => Linking.openURL( 'tel://' + this.state.slides.phone )}>{ this.state.slides.phone }</Text>
          </View>
          <View style={ stylesContacts.row }>
            <SvgUri style={ stylesContacts.icon } source={require('../../../../assets/social_icons/envelope.svg')} alt="email"></SvgUri>
            <Text style={ stylesContacts.click } onPress={() => Linking.openURL( 'mailto://' + this.state.slides.email )}>{ this.state.slides.email }</Text>
          </View>
          <View style={ stylesContacts.row }>
            <SvgUri style={ stylesContacts.icon } source={require('../../../../assets/social_icons/cloud.svg')} alt="cloud"></SvgUri>
            <Text style={ stylesContacts.click } onPress={() => Linking.openURL( 'https://uladzimir-yeudakimovich.github.io/assets/CV_Евдокимович Владимир.docx' )} download>{ this.state.slides.cvRussian }</Text>
          </View>
          <View style={ stylesContacts.row }>
            <SvgUri style={ stylesContacts.icon } source={require('../../../../assets/social_icons/cloud.svg')} alt="cloud"></SvgUri>
            <Text style={ stylesContacts.click } onPress={() => Linking.openURL( 'https://uladzimir-yeudakimovich.github.io/assets/CV_Uladzimir Yeudakimovich.docx' )} download>{ this.state.slides.cvEnglish }</Text>
          </View>

          <View style={ stylesContacts.title }>
            <Text style={ stylesContacts.contacts_title }>{ this.state.slides.subname }</Text>
          </View>
          <View style={ stylesContacts.row }>
            <SvgUri style={ stylesContacts.icon } source={require('../../../../assets/social_icons/linkedin.svg')} alt="linkedin"></SvgUri>
            <Text style={ stylesContacts.click } onPress={() => Linking.openURL('https://www.linkedin.com/in/uladzimir-yeudakimovich')}>{ this.state.slides.linkedin }</Text>
          </View>
          <View style={ stylesContacts.row }>
            <SvgUri style={ stylesContacts.icon } source={require('../../../../assets/social_icons/github.svg')} alt="github"></SvgUri>
            <Text style={ stylesContacts.click } onPress={() => Linking.openURL('https://github.com/uladzimir-yeudakimovich')}>{ this.state.slides.github }</Text>
          </View>
          <View style={ stylesContacts.row }>
            <SvgUri style={ stylesContacts.icon } source={require('../../../../assets/social_icons/codewars.svg')} alt="codewars"></SvgUri>
            <Text style={ stylesContacts.click } onPress={() => Linking.openURL('https://www.codewars.com/users/uladzimir.yeudakimovich')}>{ this.state.slides.codewars }</Text>
          </View>
          <View style={ stylesContacts.row }>
            <SvgUri style={ stylesContacts.icon } source={require('../../../../assets/social_icons/students-cap.svg')} alt="students-cap"></SvgUri>
            <Text style={ stylesContacts.click } onPress={() => Linking.openURL('https://www.duolingo.com/91YN1')}>{ this.state.slides.duolingo }</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View></View>
      );
    }
  }
}

const stylesContacts = StyleSheet.create({
  title: {
    alignItems: 'center',
  },
  contacts_title: {
    fontSize: 20
  },
  row: {
    paddingTop: 5,
    flexDirection: 'row'
  },
  icon: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
    paddingRight: 10
  },
  click: {
    color: '#0000FF'
  }
});