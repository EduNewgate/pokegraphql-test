const { gql } = require('apollo-server');

const PokemonHeldItemModule = gql`
    type PokemonHeldItem {
        item: Item
        version_details: [PokemonHeldItemVersion]
    }
`;

module.exports = PokemonHeldItemModule;