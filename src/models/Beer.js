import Api from '../lib/Api';

export default class Beer {
    async getRandomBeer(){
        try {
            const response = await Api.get('beer/random', {hasLabels: 'Y'});
            return response;
        } catch (error) {
            // Handle error
            return false;
        }
    }
}