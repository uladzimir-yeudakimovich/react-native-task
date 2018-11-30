import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Carousel from 'react-native-looped-carousel';

export default class Main extends React.Component {

  render() {
    return (
      <View style={ stylesMain.wrapper }>
        <Text style={ stylesMain.title }>{ main.title }</Text>
        <Carousel
          delay={2000}
          style={ stylesMain.carousel }
          autoplay
        >
          <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require('../../../assets/images/angular_task/angular_task1.jpg')} alt="logo_phone"></Image></View>
          <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require('../../../assets/images/angular_task/angular_task2.jpg')} alt="logo_phone"></Image></View>
          <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require('../../../assets/images/angular_task/angular_task3.jpg')} alt="logo_phone"></Image></View>
          <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require('../../../assets/images/angular_task/angular_task4.jpg')} alt="logo_phone"></Image></View>
          <View style={ stylesMain.slide }><Image style={ stylesMain.logo } source={require('../../../assets/images/angular_task/angular_task5.jpg')} alt="logo_phone"></Image></View>
        </Carousel>
      </View>
    );
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