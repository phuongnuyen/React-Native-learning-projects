import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 20}} />
        <View style={styles.row}>
            <Image
                style={{height: 100, width: 100}}
                source={{uri: 'https://secure.meetupstatic.com/photos/event/4/4/1/3/event_434717427.jpeg'}}
            />
            <View style={styles.textbox}>
                <Text style={styles.header}>React Course.</Text>
                <Text>Course about how to write the React Web framework.</Text>
            </View>
        </View>

        <View style={styles.row}>
            <Image
                style={{height: 100, width: 100}}
                source={{uri: 'https://secure.meetupstatic.com/photos/event/4/4/1/3/event_434717427.jpeg'}}
            />
            <View style={styles.textbox}>
                <Text style={styles.header}>React Native Course.</Text>
                <Text>Course about how to write the Mobile App in iOS and Android by using ReactNative.</Text>
            </View>
        </View>

        <View style={styles.row}>
            <Image
                style={{height: 100, width: 100}}
                source={{uri: 'https://secure.meetupstatic.com/photos/event/4/4/1/3/event_434717427.jpeg'}}
            />
            <View style={styles.textbox}>
                <Text style={styles.header}>Redux Course.</Text>
                <Text>Course about predictable state container for JavaScript apps (aka Redux) which is help the application...</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fafafa'
  },
  row: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems:'center',
    marginBottom: 5,
  },
  header: {
    fontSize: 20,
    flexWrap: 'wrap'
  },
  textbox: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 8,
    marginRight: 5}
});

AppRegistry.registerComponent('Main', () => Main);
