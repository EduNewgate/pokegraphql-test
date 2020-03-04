module.exports = {
    Query: {
        getPokemonCards: (_, {offset, limit}, { dataSources }) => 
            dataSources.pokemon.getPokemonCards(offset, limit),
        getPokemonByName: (_, {name}, { dataSources }) =>
            dataSources.pokemon.getPokemonByName(name),
        getPokemonSpecie: (_, {name}, { dataSources }) =>
            dataSources.pokemon.getPokemonSpecie(name),
    }
};