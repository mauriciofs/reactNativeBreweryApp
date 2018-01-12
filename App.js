import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RandomBeerContainer from './src/components/RandomBeers/RandomBeerContainer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RandomBeerContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 30,
  },
});
