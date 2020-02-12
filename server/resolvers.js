module.exports = {
    Query: {
        getPokemonCard: (_, {offset, limit}, { dataSources }) =>
            dataSources.pokemon.getPokemonCard(offset, limit),
        getPokemonByName: (_, {name}, { dataSources }) =>
            dataSources.pokemon.getPokemonByName(name)
    }
};