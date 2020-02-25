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
        const response = await this.get(Constants.API_RESOURCE_POKEDEX + '/national');
        if (response != undefined) {
            for (let i = offset; i < offset + limit; i++) {
                var name = response.pokemon_entries[i].pokemon_species.name;
                var entry_number = response.pokemon_entries[i].entry_number.toString().padStart(3,"0");
                await this.getPokemonByName(name, entry_number, pokemonCardResponse);
            }
            return pokemonCardResponse;
        }
    }

    async getPokemonByName(name, entry_number, pokemonCardResponse) {
        var url = Constants.API_RESOURCE_POKEMON + '/' + name;
        const response = await this.get(url);
        var isResponse = response != undefined;
        if (isResponse && pokemonCardResponse != undefined) {
            this.buildCard(response, name, entry_number, pokemonCardResponse);
        } else if (isResponse) {
            return response;
        }
    }

    buildCard(data, name, entry_number, pokemonCardResponse) {
        pokemonCardResponse.push({
            "name": name.charAt(0).toUpperCase() + name.slice(1),
            "types": data.types.reverse(),
            "entry_number": entry_number
        });
    }
}

module.exports = Pokemon;