module.exports = {
    Query: {
        getPokemonCards: async (_, {offset, limit}, { dataSources }) => {
            return await dataSources.pokemon.getPokemonCards({offset, limit});
        },
        getPokemon: (_, {name}, { dataSources }) =>
            dataSources.pokemon.getPokemonByName(name),
        getPokemonSpecies: async (_, {offset, limit}, { dataSources }) => {
            return await dataSources.pokemon.getPokemonSpecies({offset, limit});
        }
    }
};