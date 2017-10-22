import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
 } from 'react-native';
 //import Api from './api';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    const dSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource: dSource.cloneWithRows(['row 1', 'row 2', 'row 3']),
    }
    // Api.search('ironman').then((data) => {
    //   this.setState({dataSource: dSource.cloneWithRows(data)});
    // })
  }

  static navigationOptions = {
    headerTitleStyle:{
      alignSelf:'center',
      color: 'white',
    },
    headerStyle: {
      backgroundColor: 'firebrick',
    },
    title: 'Movie Explore',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderSeparator={
          (sectionID, rowID, adjacentRowHightLight) => 
          <View key={rowID} style={{height: 1, backgroundColor: 'lightgray'}}/>
        }
        renderRow={(rowData) => {
          return (
            // <Text>{rowData.title}</Text>
            <Text>{rowData}</Text>
          )
        }}
      >
      </ListView>
    );
  }
}