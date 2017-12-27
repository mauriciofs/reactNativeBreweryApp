import React, {Component} from 'react';
import RamdomBeerList from './RamdomBeerList';

class RandomBeerContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            beer: {},
        }
    }

    render(){
        return (
            <RamdomBeerList beer={this.state.beer}/>
        );
    }
}

export default RandomBeerContainer;