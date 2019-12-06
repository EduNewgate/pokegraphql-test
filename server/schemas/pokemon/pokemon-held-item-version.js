const { gql } = require('apollo-server');

const PokemonHeldItemVersionModule = gql`
    type PokemonHeldItemVersion {
        version: Version
        rarity: Int
    }
`;

module.exports = PokemonHeldItemVersionModule;