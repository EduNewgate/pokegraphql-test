const { RESTDataSource } = require('apollo-datasource-rest');
const Constants = require('./constants');
const PokemonCardModule = require('./schemas/custom/pokemon-card');

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
            for (const pokemon of response.results) {
                await this.getPokemonByName(pokemon.name);
            }
        }
    }

    async getPokemonByName(name) {
        const response = await this.get(Constants.API_RESOURCE_POKEMON + '/' + name);
        if (response != undefined) {
            await this.buildCard(response);
        }
    }

    buildCard(data) {
        console.log(data);
    }
}

module.exports = Pokemon;