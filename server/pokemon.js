const { RESTDataSource } = require('apollo-datasource-rest');
const Constants = require('./constants');
const Utils = require('./utils');

var pokemonCardResponse;

class Pokemon extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = Constants.API_BASE_URL;
    }

    /*static async getPokemonCards(args) {
        pokemonCardResponse = new Array();
        const response = await this.get(url);
        if (response != undefined) {
            for (let i = args.offset; i < args.offset + args.limit; i++) {
                response.pokemon_entries[i].pokemon_species = await this.getPokemonSpecie(response.pokemon_entries[i].pokemon_species.url);
                var pkmCardFormated = this.formatCardData(response.pokemon_entries[i]);
                pokemonCardResponse.push(pkmCardFormated);
            }
            return pokemonCardResponse;
        }
    }*/

    async getPokemonSpecies(args) {
        var url = Constants.API_BASE_URL + Constants.API_RESOURCE_POKEMON_SPECIES + '?offset=' + args.offset + '&limit=' + args.limit;
        const response = await this.get(url);
        if (response != undefined) {
            for (let res of response.results) {
                res = await this.getPokemonSpecie(res.url);
            }
            return response;
        }
    }

    async getPokemonSpecie(url) {
        const response = await this.get(url);
        if (response != undefined) {
            for (let variety of response.varieties) {
                variety.pokemon = await this.getPokemon(variety.pokemon.url);
            }
            return response;
        }
    }

    async getPokemon(url) {
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