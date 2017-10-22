import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {weight: '0', height: '0', bmi: 0, level: 'Under Weight'};    
    this.compute = this.compute.bind(this);
  }

  compute() {
    console.log('On pressed!');
    let weight = parseFloat(this.state.weight);
    let height = parseFloat(this.state.height);
    let BMI = weight/Math.pow(height/100, 2);
    let obesityLevel = 'Obese';
    if (BMI < 18.5)
      obesityLevel = 'Under Weight';
      else if (BMI < 25)
        obesityLevel = 'Normal Weight';
        else if (BMI < 32)
          obesityLevel = 'Over Weight';

    this.setState({bmi: BMI, level: obesityLevel});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.title}>Weight (KG)</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            value={this.state.weight}
            onChangeText={(weight) => this.setState({weight})}/>
        </View>
        
        <View style={styles.group}>
          <Text style={styles.title}>Height (CM)</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            value={this.state.height}
            onChangeText={(height) => this.setState({height})}/>
        </View>
        
        <View style={styles.center}>
          <View style={[styles.group, {alignItems: 'center'}]}>
            <Text style={styles.title}>BMI: {this.state.bmi.toFixed(2)}</Text>
            <Text style={[styles.title, {color: 'red'}]}>{this.state.level}!</Text>
          </View>
          <View style={styles.group}>
            <TouchableOpacity style={styles.button}
              onPress={() => this.compute()}>
              <Text style={styles.buttonText}>Compute</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  group: {
    marginTop: 20,
  },
  button:{
    backgroundColor: 'lightblue',
    padding: 20,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
  },
  center: {
    alignItems: 'center',
  }
});
