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

const Screens = StackNavigator({
  homePage: { screen: MovieListScreen },
  movieDetailPage: { screen: MovieDetai },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor='firebrick' barStyle='light-content'/>
        <Screens />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
