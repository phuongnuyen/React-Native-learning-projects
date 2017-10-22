import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
 } from 'react-native';

export default class MovieDetail extends React.Component {
    static navigationOptions = {
        title: 'Movie Detail',
        headerTitleStyle:{
          alignSelf:'center',
          color: 'white',
          marginLeft: -54,
        },
        navBarButtonImageColor: 'white',
        headerStyle: {
          backgroundColor: 'firebrick',
        },
        headerTintColor: 'white',
    };

    render() {
        return (
          <View style={{flex: 1, backgroundColor: 'lightblue', }}>
            <Text>Movie Detail...</Text>
          </View>
        );
    }
}