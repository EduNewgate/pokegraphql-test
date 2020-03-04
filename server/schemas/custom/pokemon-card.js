const { gql } = require('apollo-server');

const PokemonCardModule = gql`
    type PokemonCard {
        entry_number: String
        types: [PokemonType]
    }
`;

module.exports = PokemonCardModule;