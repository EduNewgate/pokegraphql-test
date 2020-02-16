const { RESTDataSource } = require('apollo-datasource-rest');
const Constants = require('./constants');

var pokemonCardResponse;

class Pokemon extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = Constants.API_BASE_URL;
    }

    async getPokemonCards(offset, limit) {
        pokemonCardResponse = new Array();
        const response = await this.get(Constants.API_RESOURCE_POKEMON, {
            offset: offset,
            limit: limit
        });
        if (response != undefined) {
            for (const pokemon of response.results) {
                await this.getPokemonByName(pokemon.name, pokemonCardResponse);
            }
            return pokemonCardResponse;
        }
    }

    async getPokemonByName(name, pokemonCardResponse) {
        const response = await this.get(Constants.API_RESOURCE_POKEMON + '/' + name);
        var isResponse = response != undefined;
        if (isResponse && pokemonCardResponse != undefined) {
            this.buildCard(response, pokemonCardResponse);
        } else if (isResponse) {
            return response;
        }
    }

    buildCard(data, pokemonCardResponse) {
        pokemonCardResponse.push({
            "name": data.name,
            "types": data.types.reverse()
        });
    }
}

module.exports = Pokemon;