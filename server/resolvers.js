module.exports = {
    Query: {
        getPokemon: (_, {offset, limit}, { dataSources }) =>
            dataSources.pokemon.getPokemon(offset, limit),
        getPokemonById: (_, {id}, { dataSources }) =>
            dataSources.pokemon.getPokemonById(id)
    }
};