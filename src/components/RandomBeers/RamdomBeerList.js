import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

class RamdomBeerList extends Component {
    render(){
        return (
            <View style ={styles.container}>
                <Text>Random Beer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#cec',
    },
  });

export default RamdomBeerList;