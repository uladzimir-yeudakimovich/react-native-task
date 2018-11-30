import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Carousel from 'react-native-looped-carousel';
import axios from 'axios';

export default class Main extends React.Component {

  constructor () {
    super()
    this.state = {
      slides: []
    }

    axios.get('https://uladzimir-yeudakimovich.ml/assets/data.json').then(response => {
      this.setState({ slides: response.data });
      // console.log(this.state.slides);
    }).catch(error => console.log(error));
  }

  render() {

    if (this.state.slides.length > 0) {
      return (
        <View style={ stylesMain.wrapper }>
          <Text style={ stylesMain.title }>{ main.title }</Text>
          <Text style={ stylesMain.title }>{ this.state.slides[0].name }</Text>
          <Carousel
            delay={2000}
            style={ stylesMain.carousel }
            autoplay
          >
            <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require(`../../../assets/images/angular_task/angular_task1.jpg`)} alt="logo_phone"></Image></View>
            <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require('../../../assets/images/angular_task/angular_task2.jpg')} alt="logo_phone"></Image></View>
            <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require('../../../assets/images/angular_task/angular_task3.jpg')} alt="logo_phone"></Image></View>
            <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require('../../../assets/images/angular_task/angular_task4.jpg')} alt="logo_phone"></Image></View>
            <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require('../../../assets/images/angular_task/angular_task5.jpg')} alt="logo_phone"></Image></View>
          </Carousel>
        </View>
      );
    } else {
      return (
        <View style={ stylesMain.wrapper }>
          <Text style={ stylesMain.title }>Loading...</Text>
        </View>
      );
    }
  }
}

const main = {
  title: 'My works'
}

const stylesMain = StyleSheet.create({
  wrapper: {
    alignItems: 'center'
  },
  title: {
    paddingTop: 10,
    fontSize: 20
  },
  carousel: {
    paddingTop: 5,
    width: 300,
    height: 200
  },
  slide: {
    width: 300,
    height: 200
  },
  logo: {
    width: '100%',
    height: '100%'
  }
});