module.exports = {
    Query: {
        getPokemon: (_, __, { dataSources }) =>
            dataSources.getPokemon.getAllPokemon(),
        getPokemonPaginated: (_, {offset, limit}, { dataSources }) =>
            dataSources.getPokemon.getAllPokemonPaginated(offset, limit)
    }
};