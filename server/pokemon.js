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
                await this.getPokemonByName(pokemon.url, pokemonCardResponse);
            }
            return pokemonCardResponse;
        }
    }

    async getPokemonByName(url, pokemonCardResponse) {
        const response = await this.get(url);
        var isResponse = response != undefined;
        if (isResponse && pokemonCardResponse != undefined) {
            this.buildCard(response, pokemonCardResponse);
        } else if (isResponse) {
            return response;
        }
    }

    buildCard(data, pokemonCardResponse) {
        this.formatNames(data.abilities);
        pokemonCardResponse.push({
            "name": data.name.charAt(0).toUpperCase() + data.name.slice(1),
            "weight": data.weight/10, //Kg
            "height": data.height/10, //metros
            "types": data.types.reverse(),
            "abilities": data.abilities.reverse(),
            "stats": data.stats.reverse()
        });
    }

    formatNames(abilities) {
        for (let ab of abilities) {
            ab.ability.name = ab.ability.name.charAt(0).toUpperCase() + ab.ability.name.replace("-", " ").slice(1)
        }
    }
}

module.exports = Pokemon;