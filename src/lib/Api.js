import {NotFoundException, UnauthorizedException, ForbiddenException} from './Errors';
import queryString from 'query-string';

export default class Api {
    static url = 'http://api.brewerydb.com/v2/';
    /**
     * Do a GET request
     * @param {String} url - Url to call
     * @return {Thenable} Thenable object
     */
    static async get(path, params){
        return this.call(path, params, {method: 'GET'});
    }

    /**
     * Do a POST request
     * @param {String} url - Url to call
     * @return {Thenable} Thenable object
     */
    static async post(path, params = {}){
        return this.call(path, {}, {method: 'POST', body: JSON.stringify(params)});
    }

    /**
     * Do a DELETE request
     * @param {String} url - Url to call
     * @return {Thenable} Thenable object
     */
    static async delete(path){
        return this.call(path, {}, {method: 'DELETE'});
    }

    /**
     * Do a PUT request
     * @param {String} url - Url to call
     * @return {Thenable} Thenable object
     */
    static async put(path, params = {}){
        return this.call(path, {}, {method: 'PUT', body: JSON.stringify(params)});
    }

    /**
     * @param {String} path - path to call
     * @param {Object} params - params to append
     * @param {Object} options - Fetch options
     * @return {Thenable} Thenable object
     */
    static async call(path, params = {}, options = {}){
        const apiKey = '4de854da2471107f727eb5df81d8a369';
        const url = `${this.url}/${path}?key=${apiKey}&${queryString.stringify(params)}`;
        console.log(`FETCHING: ${url}`);

        return fetch(url, options).then((response) => {
            //If ok return json parsed
            if(response.ok){
                return response.json().then((result) => {
                    //Return json response
                    return result.data;
                });
            }

            const status = response.status;
            const errors = {
                401: UnauthorizedException,
                403: ForbiddenException,
                404: NotFoundException,
            }

            //Token expired
            if(errors[status]){
                throw new errors[status](response.error);
            }

            throw new Error(response.error);
        });
    }
}