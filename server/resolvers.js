module.exports = {
    Query: {
        getPokemon: (_, {offset, limit}, { dataSources }) =>
            dataSources.getPokemon.getPokemon(offset, limit),
        getPokemonById: (_, {id}, { dataSources }) =>
            dataSources.getPokemon.getPokemonById(id)
    }
};