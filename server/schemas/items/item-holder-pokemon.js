const { gql } = require('apollo-server');

const ItemHolderPokemonModule = gql`
    type ItemHolderPokemon {
        pokemon: Pokemon
        version_details: [ItemHolderPokemonVersionDetail]
    }
`;

module.exports = ItemHolderPokemonModule;