import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
 } from 'react-native';
 import Api from './api';

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
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
  };

  constructor(props){
    super(props);
    this.state = {genres: '', movie: {}};
    let movieID = this.props.navigation.state.params.movieID;
    Api.detail(movieID).then((data) => this.setState({movie: data}));
    Api.genres(movieID).then((list) => this.setState({genres: list.toString()}));
  }

  separator(){
    return (
      <View style={{height: 1, backgroundColor: 'lightgray', margin: 5}}/>
    );
  }

  render() {
    let imgURL = Api.imgRootURL + this.state.movie.poster_path;
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Image style={styles.image} source={{uri: imgURL}}/>
          <Text style={styles.subtitle}>Popularity: {this.state.movie.popularity}</Text>
          <Text style={styles.subtitle}>Score: {this.state.movie.vote_average}</Text>
        </View>
        <View style={{flex: 2, padding: 10}}>
          <Text style={styles.title}>{this.state.movie.original_title}</Text>
          {<Text>Genre: {this.state.genres} </Text>}
          {this.separator()}
          <Text>Release: {this.state.movie.release_date} ({this.state.movie.runtime} min)</Text>
          <Text style={{color: 'red'}}>{this.state.movie.adult ? 'Adult': ''}</Text>
          {this.separator()}
          <Text>{this.state.movie.overview}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 10,
    flexDirection: 'row',
  },
  image: {
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 20
  },
});