const { RESTDataSource } = require('apollo-datasource-rest');
const Constants = require('./constants');
const Utils = require('./utils');

class Pokemon extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = Constants.API_BASE_URL;
    }

    async getPokemonSpecies(args) {
        var url = Constants.API_BASE_URL + Constants.API_RESOURCE_POKEMON_SPECIES + '?offset=' + args.offset + '&limit=' + args.limit;
        const response = await this.get(url);
        if (response != undefined) {
            var res = new Array();
            for (let result of response.results) {
                result = await this.getPokemonSpecie(result.url);
                res.push(this.formatData(result));
            }
            response.results = res;
            return response;
        }
    }

    async getPokemonSpecie(arg) {
        var url = Utils.buildURL(arg, Constants.API_RESOURCE_POKEMON_SPECIES);
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

    formatData(pkm) {
        pkm.id = pkm.id.toString().padStart(3, "0");
        pkm.name = pkm.name.charAt(0).toUpperCase() + pkm.name.slice(1);
        for (const variety of pkm.varieties) {
            variety.pokemon.name = variety.pokemon.name.charAt(0).toUpperCase() + variety.pokemon.name.slice(1);
            variety.pokemon.types = variety.pokemon.types.reverse();
        }
        return pkm;
    }
}

module.exports = Pokemon;