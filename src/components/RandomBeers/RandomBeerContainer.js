import React, {Component} from 'react';
import RandomBeerList from './RandomBeerList';
import Beer from '../../models/Beer';

class RandomBeerContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            beer: {},
        }
    }

    getRandomBeer = () => {
        //Get random beer
        const model = new Beer();
        model.getRandomBeer().then((beer) => {
            this.setState({beer: beer});
        });
    }

    componentDidMount(){
        this.getRandomBeer();
    }

    onButtonPress = () => {
        this.getRandomBeer();
    }

    render(){
        return (
            <RandomBeerList beer={this.state.beer} onButtonPress={this.onButtonPress}/>
        );
    }
}

export default RandomBeerContainer;