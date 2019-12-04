const { gql } = require('apollo-server');

const pokemonModule = gql`
    type Pokemon {
        id: Int
        name: String
        types: [PokemonType]
        weight: Int
    }
`;

module.exports = pokemonModule;