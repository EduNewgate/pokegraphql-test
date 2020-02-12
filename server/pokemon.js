const { RESTDataSource } = require('apollo-datasource-rest');
const Constants = require('./constants');

class Pokemon extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = Constants.API_BASE_URL;
    }

    async getPokemonCard(offset, limit) {
        const response = await this.get(Constants.API_RESOURCE_POKEMON, {
            offset: offset,
            limit: limit
        });
        
        if (response != undefined) {
            return response;
        }
    }

    async getPokemonByName(name) {
        const response = await this.get(Constants.API_RESOURCE_POKEMON + '/' + name);
        if (response != undefined) {
            return response;
        }
    }
}

module.exports = Pokemon;