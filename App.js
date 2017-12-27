import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RandomBeerContainer from './src/components/RandomBeers/RandomBeerContainer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RandomBeerContainer/>
        <Text>Open up App.js to start working on your app!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
