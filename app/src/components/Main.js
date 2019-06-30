import React from 'react';
import { StyleSheet, Text, View, Image, Linking  } from 'react-native';
import Carousel from 'react-native-looped-carousel';
import axios from 'axios';

export default class Main extends React.Component {

  constructor () {
    super()
    this.state = {
      slides: []
    }

    axios.get('https://uladzimir-yeudakimovich.github.io/assets/data.json').then(response => {
      this.setState({ slides: response.data });
    }).catch(error => console.log(error));
  }

  render() {
    if (this.state.slides !== []) {
      return (
        <View style={ stylesMain.wrapper }>
          <Text style={ stylesMain.title }>{ main.title }</Text>
          {
            this.state.slides.map((item, index) => {
              return  <View style={ stylesMain.wrapper } key={index}>
                        <Text style={ stylesMain.name }>{ item.name }</Text>
                        <Text style={ stylesMain.click } onPress={() => Linking.openURL( item.link )}>{ item.click }</Text>
                        <Text style={ stylesMain.description }>{ item.description }</Text>
                        <Carousel
                          delay={3000}
                          style={ stylesMain.carousel }
                          autoplay
                        >
                          {
                            item.images.map((item, index) => {
                              return  <View style={ stylesMain.slide } key={index}>
                                        <Image style={ stylesMain.image } source={{uri: 'https://uladzimir-yeudakimovich.github.io/' + item}} alt="image"></Image>
                                      </View>
                              })
                          }
                        </Carousel>
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

const main = {
  title: 'My works'
}

const stylesMain = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  },
  name: {
    paddingTop: 5,
    fontSize: 16
  },
  click: {
    color: '#0000FF'
  },
  description: {
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  carousel: {
    minWidth: 300,
    height: 220
  },
  slide: {
    minWidth: 300,
    height: 220
  },
  image: {
    width: '100%',
    height: '100%'
  }
});