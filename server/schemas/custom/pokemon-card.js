const { gql } = require('apollo-server');

const PokemonCardModule = gql`
    type PokemonCard {
        name: String
        types: [PokemonType]
        entry_number: String
    }
`;

module.exports = PokemonCardModule;