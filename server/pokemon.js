const { RESTDataSource } = require('apollo-datasource-rest');
const Constants = require('./constants');

class Pokemon extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = Constants.API_BASE_URL;
    }

    async getPokemon(offset, limit) {
        const response = await this.get(Constants.API_RESOURCE_POKEMON, {
            offset: offset,
            limit: limit
        });
        if (response.results != undefined) {
            return response.results;
        }
    }

    async getPokemonById(id) {
        const response = await this.get(Constants.API_RESOURCE_POKEMON + '/' + id);
        if (response != undefined) {
            return response;
        }
    }
}

module.exports = Pokemon;