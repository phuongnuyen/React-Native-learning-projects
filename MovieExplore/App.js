import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   StatusBar,
  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieListScreen from './MovieListScreen';
import MovieDetai from './MovieDetail';

export const Screens = StackNavigator({
  homePage: { screen: MovieListScreen },
  movieDetailPage: { screen: MovieDetai },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor='dodgerblue' barStyle='light-content'/>
        <Screens />
      </View>
    );
  }
}
