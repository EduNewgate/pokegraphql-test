const { RESTDataSource } = require('apollo-datasource-rest');
const Constants = require('./constants');
const Utils = require('./utils');

var pokemonCardResponse;

class Pokemon extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = Constants.API_BASE_URL;
    }

    async getPokemonCards(offset, limit) {
        pokemonCardResponse = new Array();
        var url = Utils.buildURL('national', Constants.API_RESOURCE_POKEDEX)
        const response = await this.get(url);
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
        var url = Utils.buildURL(name, Constants.API_RESOURCE_POKEMON_SPECIES);
        const response = await this.get(url);
        if (response != undefined) {
            for (const variety of response.varieties) {
                variety.pokemon = await this.getPokemon(variety.pokemon.url);
            }
            return response;
        }
    }

    async getPokemon(name) {
        var url = Utils.buildURL(name, Constants.API_RESOURCE_POKEMON);
        const response = await this.get(url);
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