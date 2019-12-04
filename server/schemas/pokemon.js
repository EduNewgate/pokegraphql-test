const { gql } = require('apollo-server');

const PokemonModule = gql`
    type Pokemon {
        id: Int
        name: String
        types: [PokemonType]
        weight: Int
    }
`;

module.exports = PokemonModule;