module.exports = {
    Query: {
        pokemon: (_, __, { dataSources }) =>
            dataSources.pokemon.getAllPokemon()
    }
};