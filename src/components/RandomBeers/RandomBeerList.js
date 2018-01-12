import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

class RandomBeerList extends Component {
    render(){
        const {beer, onButtonPress} = this.props;
        console.log(beer);
        return (
            <View style ={styles.container}>
                <Text>Random Beer!!</Text>
                {beer && beer.name && 
                    <View>
                        <Text>
                            Description: {beer.description}
                        </Text>
                        <Image
                            style={{width: 50, height: 50}}
                            source={{uri: beer.labels.medium}}
                        />
                        <Button
                            onPress={onButtonPress}
                            title="Next Beer"
                        />
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

export default RandomBeerList;