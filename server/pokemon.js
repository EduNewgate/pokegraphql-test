const { RESTDataSource } = require('apollo-datasource-rest');
const Constants = require('./constants');

class Pokemon extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = Constants.API_BASE_URL;
    }

    async getAllPokemon() {
        const response = await this.get(Constants.API_RESOURCE_POKEMON);
        if (response.results != undefined) {
            return response.results;
        }
    }
}

module.exports = Pokemon;