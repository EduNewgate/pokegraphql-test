const { gql } = require('apollo-server');

const ItemHolderPokemonVersionDetailModule = gql`
    type ItemHolderPokemonVersionDetail {
        rarity: String
        version: Version
    }
`;

module.exports = ItemHolderPokemonVersionDetailModule;