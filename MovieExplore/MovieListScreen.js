import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ListView,
 } from 'react-native';
 import Api from './api';
 import App from './App';


 const dSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 != r2
});

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      movieName: '',
      dataSource: dSource.cloneWithRows([]),
    }
  }
  handleSearch(movieName){
    Api.search(movieName).then((data) => {
      this.setState({dataSource: dSource.cloneWithRows(data)});
    })
  }
  static navigationOptions = {
    headerTitleStyle:{
      alignSelf:'center',
      color: 'white',
    },
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    title: 'Movie Explore',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput}
          onChangeText={this.handleSearch.bind(this)}/>
          <TouchableOpacity style={styles.searchBtn}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Search</Text>
          </TouchableOpacity>
        </View>
        <ListView style={styles.container} dataSource={this.state.dataSource}
          renderSeparator={(sectionID, rowID, adjacentRowHightLight) => 
            <View key={rowID} style={{height: 1, backgroundColor: 'lightgray'}}/>
          }
          renderRow={(rowData) => {
            let imgURL = Api.imgRootURL + rowData.poster_path;
            let year = '';
            if (rowData.release_date !== ''){
              year = ' (' +  rowData.release_date.split('-')[0] + ')';
            }
            let title = rowData.original_title + year;

            return (
              <TouchableOpacity onPress={() => navigate('movieDetailPage', {movieID: rowData.id})}>
                <View style={styles.row}>
                  <View style={{flex: 3}}>
                    <Image style={styles.image} source={{uri: imgURL}}/>
                  </View>

                  <View style={{flex: 10, padding: 10}}>
                    <Text style={styles.title}>{title}</Text>
                  </View>

                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.title}>></Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    height: 48,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  searchInput: {
    flex: 1,
    height: 40,  
    marginLeft: 20,
    fontSize: 16,
    alignSelf: 'center',         
  },
  searchBtn: {
    marginLeft: 20,
    height: 52,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'blueviolet'
  },
  list: {
    padding: 6, 
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  image: {
    height: 92,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
  },
});