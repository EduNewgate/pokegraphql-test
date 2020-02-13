const { gql } = require('apollo-server');

const PokemonCardModule = gql`
    type PokemonCard {
        name: String
        types: [PokemonType]
    }
`;

module.exports = PokemonCardModule;