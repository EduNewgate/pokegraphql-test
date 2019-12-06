const { gql } = require('apollo-server');

const AbilityPokemonModule = gql`
    type AbilityPokemon {
        is_hidden: Boolean
        slot: Int
        pokemon: Pokemon
    }
`;

module.exports = AbilityPokemonModule;