module.exports = {
    Query: {
        getPokemonSpecie: async (_, {arg}, { dataSources }) => {
            return await dataSources.pokemon.getPokemonSpecie(arg);
        },
        getPokemonSpecies: async (_, {offset, limit}, { dataSources }) => {
            return await dataSources.pokemon.getPokemonSpecies({offset, limit});
        }
    }
};