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
        const response = await this.get(this.baseURL + Constants.API_RESOURCE_POKEDEX + '/national');
        if (response != undefined) {
            for (let i = offset; i < offset + limit; i++) {
                response.pokemon_entries[i].pokemon_species = await this.getPokemonSpecie(response.pokemon_entries[i].pokemon_species.url);
                var pkmCardFormated = this.formatCardData(response.pokemon_entries[i]);
                pokemonCardResponse.push(pkmCardFormated);
            }
            return pokemonCardResponse;
        }
    }

    async getPokemonSpecie(name) {
        const response = await this.get(name);
        if (response != undefined) {
            for (const variety of response.varieties) {
                variety.pokemon = await this.getPokemonByName(variety.pokemon.url);
            }
            return response;
        }
    }

    async getPokemonByName(name) {
        const response = await this.get(name);
        if (response != null) {
            return response;
        }
    }

    formatCardData(pkmCard) {
        pkmCard.entry_number = pkmCard.entry_number.toString().padStart(3, "0");
        pkmCard.pokemon_species.name = pkmCard.pokemon_species.name.charAt(0).toUpperCase() + pkmCard.pokemon_species.name.slice(1);
        for (const variety of pkmCard.pokemon_species.varieties) {
            variety.pokemon.name = variety.pokemon.name.charAt(0).toUpperCase() + variety.pokemon.name.slice(1);
            variety.pokemon.types = variety.pokemon.types.reverse();
        }
        return pkmCard;
    }
}

module.exports = Pokemon;